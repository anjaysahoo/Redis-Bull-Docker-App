import Queue from "bull";

const queue = new Queue("myQueue");

/**
 * Add a job to the queue
 */
const main = async () => {
    await queue.add({ name: "John", age: 30 });
};

/**
 * Process jobs from the queue
 */
queue.process((job, done) => {
    console.log(job.data);
    done();
});

main().catch(console.error);
