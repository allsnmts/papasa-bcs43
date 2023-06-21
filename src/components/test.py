# main.py (Python)

from flask import Flask, request, jsonify
import pandas as pd
import os

app = Flask(__name__)


@app.route('/')
def home():
    return 'API Server'


@app.route('/upload', methods=['POST'])
def upload_file():
    # Save the uploaded Excel file
    file = request.files['file']
    folder_path = os.path.join(os.path.dirname(__file__), 'uploads')
    os.makedirs(folder_path, exist_ok=True)
    file_path = os.path.join(folder_path, file.filename)
    file.save(file_path)

    # Read and process the Excel file using pandas
    df = pd.read_excel(file_path)

    # Select the desired columns
    selected_columns = ['ID', 'Feedback', 'Comment/Suggestion for Improvement']
    df = df[selected_columns]

    # Save the processed data to a new CSV file
    new_file_path = os.path.join('results.csv')
    df.to_csv(new_file_path, index=False)

    # Return the processed data as JSON
    return jsonify({'data': df.to_dict(orient='records')})


app.run(debug=True)
print('it works')
