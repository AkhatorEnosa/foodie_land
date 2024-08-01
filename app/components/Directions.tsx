import React from 'react'
import DirectionList from './DirectionList'
// import DirectionImg from '/../public/images/directions-img.png'

const Directions = () => {
  return (
    <section className="w-full directions px-20 mb-12">
        <div className=''>
            <h1 className='mb-12 text-[36px] font-semibold leading-[43.57px] -tracking-[4%]'>Directions</h1>
            <div className="flex flex-col">
                <DirectionList 
                  num='1' 
                  listImage={`/images/directions-img.png`}
                  img={true} title='Lorem ipsum dolor sit amet ' 
                  paragraph1='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' 
                  paragraph2='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'/>

                <DirectionList num='2' title='Lorem ipsum dolor sit amet ' paragraph1='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' img={false}/>

                <DirectionList num='3' title='Lorem ipsum dolor sit amet ' paragraph1='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' img={false}/>
            </div>
        </div>
    </section>
  )
}

export default Directions