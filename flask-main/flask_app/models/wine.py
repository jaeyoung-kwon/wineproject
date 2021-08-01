from re import L
from flask_app import db
from sqlalchemy import Column, Integer, String, ForeignKey,Text , PickleType

class Wine(db.Model):
    __tablename__ = 'wine'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.string(128), nullable = False)
    alcohol = db.Column(db.Integer)
    sweet = db.Column(db.Integer)
    acidity = db.Column(db.Integer)
    body = db.Column(db.Integer)
    type = db.Column(db.string(64))
    price = db.Column(db.string(128))
    
    wines = db.relationship('Wine_Category', backref='wine', cascade = "all,delete")