import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 relative overflow-hidden">
      <nav className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-purple-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="font-bold text-lg">TimeLog</span>
        </div>
        <ul className="flex space-x-6 text-sm text-gray-400 className='hover:text-white'">
          <li className='hover:text-white'>ABOUT</li>
          <li className='hover:text-white'>SERVICES</li>
          <li className='hover:text-white'>CONTACTS</li>
        </ul>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </nav>
      
      <main className="z-10 relative ">
        <h1 className="text-4xl font-bold mb-4 max-w-xl">
          <span className="text-purple-500">MAKE AN EVENT,</span><br />
          OR <span className="text-white">MAKE A TIMECAPSULE</span>
        </h1>
        {/* <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea reiciendis minus fuga quae porro nostrum ratione? Assumenda praesentium libero hic eligendi distinctio error asperiores sed culpa nulla magnam id veritatis esse reiciendis numquam nobis fugit, inventore minus in est? Velit eius vitae laboriosam, commodi excepturi harum pariatur aliquam, tenetur assumenda similique rem! Asperiores nihil nam dolore aspernatur quaerat porro quae itaque, quod placeat accusamus excepturi optio error natus magni eum explicabo aliquam modi a incidunt. Unde iusto autem mollitia ducimus fugit recusandae reprehenderit veritatis voluptas minima. A repellat illo eaque saepe, perferendis in excepturi corrupti voluptate, obcaecati magnam consequuntur. Illum, nisi porro excepturi in animi modi labore quos laudantium, minus suscipit beatae, architecto qui iure voluptatibus ratione delectus alias.</p>
        <button className="bg-transparent border border-purple-500 text-purple-500 px-4 py-2 text-sm">
          LEARN MORE
        </button> */}
        
        {/* <div className="flex flex-row-3 w-full justify-evenly ">
          {['XYZ', 'RAHUL-C', 'RAHUL-C*2'].map((title, index) => (
            <div key={index}>
              <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-bold text-sm pb-4">{title}</h3>
              <p className="text-xs text-gray-400">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
          ))}
        </div> */}
      </main>

      {/* Outer semicircle with image */}
      <div className="absolute bottom-0 right-0 w-[88vw] h-[44vw] overflow-hidden translate-x-[40%] rounded-t-full border-2 border-purple-500 border-spacing-[40%] ">
          <img src="https://i.redd.it/czknzdomc4g91.png" 
          className='w-full rounded-t1-full object-cover h-[45vw] overflow-hidden absolute right-[30%]'
          />
      </div>

      {/* Inner purple semicircle */}
      <div className="absolute bottom-0 right-4 w-[30vw] h-[15vw] bg-gray-900 rounded-t-full translate-x-[30%] border-white"></div>
    </div>
  );
};

export default HomePage;