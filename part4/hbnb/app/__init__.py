from dotenv import load_dotenv
from flask import Flask
from flask_restx import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

bcrypt = Bcrypt()
jwt = JWTManager()
db = SQLAlchemy()
load_dotenv()

from app.api.v1.users import api as users_ns
from app.api.v1.amenities import api as amenities_ns
from app.api.v1.places import api as places_ns
from app.api.v1.reviews import api as reviews_ns
from app.api.v1.auth import api as auth_ns
from app.api.v1.admin import api as admin_ns
from app.services.utils.init_data import db_init_data
        
db_path = './instance/development.db'
sql_script_path = './initial_data.sql'


def create_app(config_class="config.DevelopmentConfig"):
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
    app.config.from_object(config_class)
    authorizations = {
        'token': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'Authorization',
            'description': 'Add your JWT token, e.g., "Bearer <token>".'
        }
    }
    api = Api(app, version='1.0', title='HBnB API', description='HBnB Application API', authorizations=authorizations, doc='/api/v1/')
    
    api.add_namespace(users_ns, path='/api/v1/users')
    api.add_namespace(amenities_ns, path='/api/v1/amenities')
    api.add_namespace(places_ns, path='/api/v1/places')
    api.add_namespace(reviews_ns, path='/api/v1/reviews')
    api.add_namespace(auth_ns, path='/api/v1/auth')
    api.add_namespace(admin_ns, path='/api/v1/admin')

    bcrypt.init_app(app)
    jwt.init_app(app)
    db.init_app(app)

    with app.app_context():
        db.create_all()
        # create_admin_user()
        db_init_data(db_path, sql_script_path)
        # db_populate()

    return app