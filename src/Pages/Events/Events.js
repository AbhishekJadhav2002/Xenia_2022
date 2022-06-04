import React from "react";


const Events = () => {
  const teamDetails = [
    {
      EventName: "Event1",
     img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
    },
    {
      EventName: "Event2",
            img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-" ,
    },
    {
      EventName: "Event3",
      
      img:"https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
    },
    {
      EventName: "Event4 ",
   
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
    },
    {
      EventName: "Event5",
    
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
    },
    {
      EventName: "Event6",
    
      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
    },
    {
      EventName: "Event7",
    
      img:"https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
    },
    {
      EventName: "Event8 ",
    
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
    },
    {
      EventName: "Event9",
   
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
    },
    {
      EventName: "Event10",
   
    img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
    },
    
    
  ];

  return (
      <body className="bg-black">
    <div className="Events">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 "
        style={{ fontFamily: "Quicksand" }}
      >
       Events
      </h1>
      <div className="Events-main flex justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto">
        {teamDetails.map((member, i) => (
          <div
            key={`member${i}`}
            className="w-[300px] transition-all p-3 hover:bg-purple-600 hover:bg-opacity-40 inline-block m-4 cursor-pointer rounded-xl "
          >
            
              <div className=" ">
                <img
                  className="max-h-full max-w-full  "
                  src={member.img}
                  alt="Events"
                />
              </div>
              <div>
                <br />
                <p className="text-white  text-center  p-text-white text-allign:center   px-8 rounded-2xl font-bold  cursor-pointer   ">
                  {member.EventName}
                </p>
              </div>
            
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default Events;
