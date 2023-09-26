import swal from "sweetalert";


const MultipleCard = ({ card }) => {


    const { id, Picture, Title, Category, color_btn_bg, color_card_bg, color_text_button, Description, Price } = card || {}

    const handleAddToDonation = () => {

        const addToDonation = [];

        const donationPage = JSON.parse(localStorage.getItem('donation'))

        if (!donationPage) {

            addToDonation.push(card)
            localStorage.setItem('donation', JSON.stringify(addToDonation))
            swal("Great Work!", "You Donated SuccessFully!", "success");

        }


        else {

            const isExists = donationPage.find(card => card.id === id)

            if (!isExists) {
                
                addToDonation.push(...donationPage, card)
            localStorage.setItem('donation', JSON.stringify(addToDonation))
            swal("Great Work!", "You Donated SuccessFully!", "success");

            } else {

                swal("Alert!", " You Are Already Donate This Item  ", "error");
            }

            
        }

    
    }


    return (

        // detaile card 

        <div>

               <div className="relative " >
               <img className="w-full rounded-b-xl" src={Picture} alt="" />

               <div className="bg-blend-overlay rounded-b-lg bg-cover bg-fixed p-6 bg-black/50 absolute bottom-0 w-full">
                    <button onClick={handleAddToDonation} style={{backgroundColor: color_text_button}} className="p-2 text-white font-bold rounded-lg">Donate {Price}</button>
                </div>

               </div>

            <div className="mx-5 my-10">
                <h3 className="font-extrabold text-3xl text-[#0B0B0B] ">{Title} </h3>
                <p className="font-normal text-lg py-4">{Description}</p>

            </div>
        </div>
    );
};

export default MultipleCard;