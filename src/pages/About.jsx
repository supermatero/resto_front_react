import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

export default function About() {
  return (
    <Layout>
      <Box sx={{
        px:'20px',
        textAlign: 'center',
        "& h4":{
          fontWeight: 'bold',
          my:2,
          fontSize: '2rem',
          p:2,
        },
        "& p":{
          textAlign: 'justify',
        },
        "@media (max-width: 600px)":{
          //  backgroundColor:'greenyellow',
           mt:0,
          "& h4":{
            fontSize: '1.2rem',
            mt:0,
          },
          "& p":{
            fontSize: '1rem',
          },
        },

      }}>
        <Typography variant="h4" color="initial">
          Welcome to The Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis incidunt consequuntur accusantium tempore error at natus. Consequuntur ipsa eum cupiditate aliquid architecto molestias iure repellendus non eligendi tempora, ad minima laudantium quidem iusto impedit eos eius nulla obcaecati placeat blanditiis autem tempore ullam. Nostrum quis sapiente impedit voluptatem harum minus. Beatae, delectus cum vel accusamus repudiandae reprehenderit eum. Repudiandae animi in veritatis numquam expedita corrupti cupiditate fuga excepturi, vero perferendis eius voluptate, aspernatur debitis omnis corporis esse accusantium labore, sunt fugiat? Praesentium dicta repudiandae maiores cumque eligendi dolore accusamus. Corporis reiciendis labore iusto repudiandae distinctio aliquam placeat reprehenderit illum.
        </p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores enim, vitae aliquid dolorem tempore labore dolore quos, corporis, nesciunt excepturi mollitia reprehenderit non aspernatur quam voluptatibus illo sapiente doloremque quae provident ipsa odio! Ullam ratione veritatis illo nihil, maiores tenetur numquam architecto fuga assumenda obcaecati harum doloremque optio neque vero molestias incidunt dolorum repellat sunt modi. Quo fuga dicta aut, minus illo praesentium inventore labore veritatis provident sunt consectetur beatae, totam quos voluptatibus eligendi possimus natus fugiat quia nam voluptates nisi adipisci eos ratione! Officia, consectetur. Perferendis, libero illum nemo iusto optio ullam, omnis ab atque reiciendis minus esse?</p>
      </Box>
    </Layout>
  )
}
