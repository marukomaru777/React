from flask import render_template
from flask import request
from flask import Response
from flask import jsonify
from flask import Blueprint
from flask import url_for

import yfinance as yf

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def index(path):
  return render_template('index.html')

@main.route('/', defaults={'path': 'result'})
@main.route('/<path:path>', methods=['get'])
def result(path):
  stock = request.form.get('stock')
  dateStr = request.form.get('dateStr')
  # # df=yf.download(symbol [, start, end] [, period, interval])  
  # df = yf.download(stock, dateStr)
  # # Convert Pandas DataFrame To JSON Using orient = 'records' 
  # result = df.to_json(orient="records")
  result = {
    stock: stock,
    dateStr: dateStr
  }
  return jsonify(result)