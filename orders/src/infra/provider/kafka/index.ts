import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ["awaited-guinea-7247-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'YXdhaXRlZC1ndWluZWEtNzI0NyQUaBPqmF6PDfSERYTW2nbiPxiZvP7qK26OHI4',
    password: 'MzY4ZTBhMDktMWQyMi00YmQ5LThmYjUtN2NlMzRjMTVlNWY3',
  },
  ssl: true,
});

export { kafka };
