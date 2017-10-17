
"""	Project Name: JSON to Swift Parser
	File Name: json_parse.py
	Description: Analyze restaurant.json format to make separate files
	based on category 
"""
import glob
import json
import string 

def read_file(filename):
	with open(filename, 'r') as myfile:
		data = myfile.read()
	return data

def sep_lines(data):
	return data.split('\n')

def split_line(line):
	return json.dumps(line)

filename = "restaurants.json"
all_lines = sep_lines(read_file(filename))

def generate_lists(lines):
	cleaned_lists = []
	for line in lines:
		curr = []
		line = json.loads(line)
		for i in line:
			curr.append(line[i])
		cleaned_lists.append(curr)
	return cleaned_lists

print(generate_lists(all_lines))