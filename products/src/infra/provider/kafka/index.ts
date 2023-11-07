import { Kafka } from 'kafkajs';
import 'dotenv/config'

const kafka = new Kafka({
  brokers: JSON.parse(process.env.KAFKA_BROKERS ?? '[]'),
  sasl: {
    mechanism: 'scram-sha-256',
    username: process.env.KAFKA_USER ?? '',
    password: process.env.KAFKA_PASSWORD ?? '',
  },
  ssl: true,
});

export { kafka };
