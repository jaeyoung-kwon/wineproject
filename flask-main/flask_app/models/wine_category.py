from re import L
from flask_app.__init__ import db
from sqlalchemy import Column, Integer, String, ForeignKey,Text , PickleType

class Wine_Category(db.Model):
    __tablename__ = 'wine_category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.string(128), nullable = False)
    country = db.Column(db.string(128), nullable = False)
    region = db.Column(db.string(128))
    wine_id = db.Column(db.Integer,db.ForeignKey('wine.id'))
    