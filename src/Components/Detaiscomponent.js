import React from 'react'

const Detaiscomponent = (props) => {
    return (
        <div>
            <h1>overview</h1>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="row">
                        <div class="col-lg-6">
                            <img alt="ecommerce" class="img-fluid rounded" src={props.image} />
                        </div>
                        <div class="col-lg-6">
                            <h2 class="text-sm text-muted">{props.tagline}</h2>
                            <h1 class="text-gray-900 display-4 fw-bold mb-4">{props.name}</h1>

                            <p class="lead">{props.overview}</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Detaiscomponent
