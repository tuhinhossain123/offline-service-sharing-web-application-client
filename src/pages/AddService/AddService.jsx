import axios from "axios";
import ServiceFrom from "../../components/ServiceFrom/ServiceFrom";

const AddService = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const user = {name, email, url, serviceName, price, serviceArea, description };
        console.log(user)


        axios.post('http://localhost:5000/services', user)
        .then(data => {
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    

    }
    return (
        <div className="">
            <ServiceFrom handleSubmit={handleSubmit}></ServiceFrom>
        </div>
    );
};

export default AddService;