import React from "react";

const CodeExamples = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6">
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg max-w-4xl my-7 w-full border border-[#334155]">
        <div className="text-[#a5b4fc] font-bold text-2xl mb-7">
          Code Examples
        </div>

        <div>
          
          <div className="mb-7">

          <div className="text-[#a5b4fc] font-bold text-xl mb-4">Python</div>

          <div className="flex justify-center items-center h-full border border-[#334155]">
            <div className="bg-[#1e293b] rounded-lg shadow-lg max-w-4xl w-full">
              <pre className="bg-[#0f172a] text-[#e2e8f0] p-4 rounded-md overflow-x-auto">
                <code>
                  {`
import requests

API_KEY = "your_api_key_here"

API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
                  `}
                </code>
              </pre>
            </div>
          </div>
          </div>

          <div>
          <div className="text-[#a5b4fc] font-bold text-xl mb-4">
            JavaScript (Node.js)
          </div>

          <div className="flex justify-center items-center h-full border border-[#334155]">
            <div className="bg-[#1e293b] rounded-lg shadow-lg max-w-4xl w-full">
              <pre className="bg-[#0f172a] text-[#e2e8f0] p-4 rounded-md overflow-x-auto">
                <code>
{`
const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`}
                </code>
              </pre>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CodeExamples;
