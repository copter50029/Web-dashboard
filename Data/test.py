import pandas as pd
from kafka import KafkaProducer
import json
import time

data = pd.read_csv('Raw-data.csv')

# producer = KafkaProducer(bootstrap_servers='localhost:9092',
#                          value_serializer=lambda v: json.dumps(v).encode('utf-8'))
def transform_data(data):
    """Transforms raw data into a list of dictionaries."""
    transformed = []
    for _, row in data.iterrows():
        item = {
            "id": int(row["Unnamed: 0"]),
            "trans_date_trans_time": row["trans_date_trans_time"],
            "cc_num": int(row["cc_num"]),
            "merchant": row["merchant"],
            "category": row["category"],
            "amt": float(row["amt"]),
            "first": row["first"],
            "last": row["last"],
            "gender": row["gender"],
            "street": row["street"],
            "city": row["city"],
            "state": row["state"],
            "zip": int(row["zip"]),
            "lat": float(row["lat"]),
            "long": float(row["long"]),
            "city_pop": int(row["city_pop"]),
            "job": row["job"],
            "dob": row["dob"],
            "trans_num": row["trans_num"],
            "unix_time": int(row["unix_time"]),
            "merch_lat": float(row["merch_lat"]),
            "merch_long": float(row["merch_long"]),
            "is_fraud": int(row["is_fraud"])
        }
        transformed.append(item)
    return transformed

transformed_data = transform_data(data)
producer = KafkaProducer(bootstrap_servers=["localhost:9093"], max_block_ms=5000)

for record in transformed_data:
    producer.send("fake-data", json.dumps(record).encode("utf-8"))
    time.sleep(1)  # Simulate real-time data by waiting for 1 second between sends
    print(f"Sent record: {record}")
