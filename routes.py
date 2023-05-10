from flask import Blueprint, render_template, session

bp = Blueprint('views', __name__)

@bp.route('/')
def index():
    session['visited'] = True
    return render_template('index.html')
