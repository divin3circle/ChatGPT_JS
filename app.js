const API_KEY =" "
const API_URL ="https://api.openai.com/v1/chat/completions"

let messages=[
    {role:"system", content:`
You are an experienced Javascript Developer and your work is to answer Javascript
questions in a humorous way and if the question is not about Javascript reply 
with 'I dont Know', make it less than 15 words use atleast two emojis
`}
]

async function promptGpt(question ){
// logic to get a Response
messages.push({role:"user", content:question})
    let res = await fetch(API_URL, {
        method:"POST",
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages,
            // temperature:0.8 -- make it creative and randomize 
        }),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${API_KEY}`
        }
    })

    let results = await res.json()
    messages.push(results.choices[0].message)
    console.log(results.choices[0].message)
    
}

async function Run(){
    await promptGpt(" What is Javascript")
    
}



// async function Run1(){
//     await promptGpt("What was my previous question ")
// }
Run()
