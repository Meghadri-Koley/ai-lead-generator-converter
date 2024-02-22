const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.leadMagnet.create({
    data: {
      id: "123456789",
      userId: "user_2bKBWM5f1t9IiXWyqdhjaR0AzI4",
      name: "This is a name",
      status: "draft",
      slug: "lead-magnet-ai",
      publishedTitle: "THis is published title",
      draftTitle: "THis is draft title",
      publishedSubtitle: "THis is published subtitle",
      draftSubtitle: "THis is draft subtitle",
      publishedPrompt: "This is a published prompt",
      draftPrompt: "This is a draft prompt",
      publishedBody: "This is a publsihed body",
      draftBody: "This is a draft body",
      publishedFristQuestion: "This is published first question",
      draftFirstQuestion: "This is published first question",
      publishedEmailCapture: "This is a published email capture",
      draftEmailCapture: "This is a draft email capture",
    },
  });
  await prisma.lead.createMany({
    data:[
        {
            name:"Dummy 1",
            email :"dummy1@gmail.com",
            leadMagnetId: "123456789",
            userId: "user_2bKBWM5f1t9IiXWyqdhjaR0AzI4"
        },
        {
            name:"Dummy 2",
            email :"dummy2@gmail.com",
            leadMagnetId: "123456789",
            userId: "user_2bKBWM5f1t9IiXWyqdhjaR0AzI4"
        },
        {
            name:"Dummy 3",
            email :"dummy3@gmail.com",
            leadMagnetId: "123456789",
            userId: "user_2bKBWM5f1t9IiXWyqdhjaR0AzI4"
        },
    ],
  });
};

seed().then(()=>{
    console.log("Seeeding Completed");
}).catch((error)=>{
    console.error("Error", error);
    
})
