import requests
import random
from bs4 import BeautifulSoup

def get_random_event(month: str, day: int):
    url = f"https://en.wikipedia.org/wiki/{month}_{day}"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        events_span = soup.find("span", {"id": "Events"})

        events = []

        if events_span:
            headings = events_span.find_all_next("h3")
            for header in headings[:3]:
                ul = header.find_next("ul")
                if ul:
                    event_items = ul.find_all("li")
                    for item in event_items:
                        events.append(item.get_text())

        return random.choice(events)

print(get_random_event("January", 1))