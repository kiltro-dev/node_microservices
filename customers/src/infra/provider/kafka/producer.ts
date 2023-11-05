import { kafka } from '.';

export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
    const producer = kafka.producer();

    await producer.connect();
    console.log(`Message sent to topid ${topic}`);
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    });

    await producer.disconnect();
  }
}
