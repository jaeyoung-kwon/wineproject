from flask import Blueprint

bp = Blueprint('main', __name__)

@bp.route('http://localhost:3000/api', methods=['GET'])
def index():
    return {
        'name':'Hello, World'
    }