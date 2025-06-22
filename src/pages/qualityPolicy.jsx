import React from 'react'

const QualityPolicy = () => {
  return (
    <section className=' group text-text bg-gray-100 p-10 '>
        <div className='w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-5'>
            <div className=" pb-10 w-fit flex flex-col justify-center items-center">
                <h3 className="text-heading font-bold relative group-hover:text-blue-500">QUALITY POLICY</h3>
                <div className="w-0 h-[3px] bg-blue-500 mt-1.5 transition-all duration-300 ease-out group-hover:w-3/4">
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-5'>
               <p> At <strong>Ingenious</strong>, our dedicated engineering team specializes in process development and achieving uncompromised quality through rigorous process control measures. We ensure quality at every stage of manufacturing—delivering excellence that meets and exceeds customer expectations.</p>

                <p>Over the years, <strong>Ingenious</strong> has successfully supplied a wide range of fabricated assemblies with a proven track record of zero complaints in both product quality and delivery schedules.</p>
                <p>
                    Our facility is fully equipped with advanced machinery, supported by a team of experienced technologists and engineers under stable management. We take pride in executing custom and highly specialized assignments that meet unique customer specifications. From extreme engineering challenges to precision fabrication, <strong>Ingenious</strong> is capable of fulfilling diverse and complex requirements.
                </p>
                <p>
                    Our strength lies in our people—qualified, skilled, and continuously evolving technical staff and consultants, along with a committed, dynamic workforce. Together, they drive innovation and performance in line with Total Quality Management (TQM) principles, ensuring that every project aligns perfectly with our clients’ specifications.
                </p>
                <p>
                    At <strong>Ingenious</strong>, we don’t just aim to be the best—we aim to make the impossible achievable. We take pride in our ability to differentiate between just “doing the work” and “delivering quality.” No task is considered too difficult when backed by our extreme engineering mindset.
                </p>
                <p>We also offer extensive capacity for large-scale medium and heavy fabrication jobs. Our workshop is equipped with:</p>
                <ol className='list-disc flex flex-col gap-6 list-inside'>
                    <li>In-house Non-Destructive Testing (NDT) facilities</li>
                    <li>Ultrasonic testing equipment with certified operators</li>
                    <li>6-Axis CNC Floor-Mounted Horizontal Boring Machine</li>
                    <li>450-ton CNC Press Brake</li>
                    <li>CNC Four-Roll Bending Machine</li>
                    <li>High-Density CNC Plasma Cutting Machine</li>
                    <li>EOT Cranes (10T and 5T capacities)</li>
                    <li>Shot Blasting and Painting Booths</li>
                    <li>MIG Welding, Drilling, and Riveting Machines</li>
                </ol>
                <p>
                    We’ve also established a strong vendor ecosystem for outsourced processes like stress relieving and precision machining.
                    <strong>Ingenious</strong> stands ready to be your partner in engineering excellence—turning bold ideas into built reality.
                </p>

            </div>

        </div>

         </section>
  )
}

export default QualityPolicy
