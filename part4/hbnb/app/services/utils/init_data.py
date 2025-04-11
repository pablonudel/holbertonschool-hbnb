import sqlite3

def empty_db(database):
    conn = sqlite3.connect(database)
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
        tables = cursor.fetchall()
        
        for table in tables:
            table_name = table[0]
            cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
            row_count = cursor.fetchone()[0]
            if row_count > 0:
                return False
        return True

    except sqlite3.Error as e:
        print(f"Error checking if database is empty: {e}")
        return False
    finally:
        if conn:
            conn.close()

def db_init_data(database, initial_data):
    if empty_db(database):
        conn = sqlite3.connect(database)
        try:
            cursor = conn.cursor()
            with open(initial_data, 'r') as f:
                sql_script = f.read()
                cursor.executescript(sql_script)
            conn.commit()
            print(f"Database '{database}' populated successfully with the script '{initial_data}'.")
        except sqlite3.Error as e:
            print(f"Database population error: {e}")
        finally:
            if conn:
                conn.close()
    else:
        print(f"Database '{database}' is not empty. Skipping data population.")