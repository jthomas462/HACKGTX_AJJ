import json 
import openai 
import os


def generate_image(prompt: str, n: int, size: str): 
    with open("scripts/config.json", "r") as config_file:
        config = json.load(config_file)
    token = config["token"]

    openai.api_key = token
    response = openai.Image.create(
        prompt = prompt,
        n = n,
        size = size
    )

    return response["data"][0]["url"]

