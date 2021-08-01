import os
from flask import Flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATAVASE_URI")
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://xbtofgpltospkc:d0fb5ede6a511516a204ca406913c8882168db242696cd0c490ac07b27fb140d@ec2-3-230-38-145.compute-1.amazonaws.com:5432/dbb0ig51iq034o"
    # if config is not None:
    #     app.config.update(config)

    db.init_app(app)
    migrate.init_app(app, db)

    from flask_app.routes.main_routes import bp
    app.register_blueprint(bp)
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)