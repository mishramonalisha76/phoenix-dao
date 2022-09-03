import React from "react";
import Navbar from "../Navbar/navbar";
import Modal from 'react-modal';
import Uploader from "./Uploader";

export default function Perks() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const communityData = [
        [{
            name: "Startnet",
            membersno: "3",
            date: "24/03/2022",
            token: "STR",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }
        ],
        [{
            name: "Hedera",
            membersno: "4",
            date: "26/03/2022",
            token: "HED",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }],
        [{
            name: "Chingar7",
            membersno: "3",
            date: "29/03/2022",
            token: "GARI",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }],
    ];

    return (
        <>
            <div class="flex flex-col mx-24 my-14">
                <div class="flex flex-row justify-between">
                    <div>
                        <h1 class="text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
                            {`> Perks`}
                        </h1>
                    </div>

                    <div>
                        <button onClick={openModal} class="text-white mx-6 text-2xl font-semibold uppercase">
                            Collab with us
                        </button>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    > <div class="flex flex-row justify-between">
                            <div>
                                <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Collaborate  </h2>
                            </div>
                            <div>
                                <button onClick={closeModal}>close</button>
                            </div>
                        </div>




                        <div> Get Onboarded </div>
                        <div>
                        <Uploader />


                        </div>


                    </Modal>
                </div>

                <div class="grid grid-cols-1 gap-16 mt-10">
                    {communityData.map(data => (
                        <>
                            <div class="bg-slate-600 p-6 shadow-md shadow-white">
                                <h3 class="text-4xl font-semibold uppercase">
                                    {data[0].name}
                                </h3>
                                <p class="text-2xl font-semibold">
                                    {`No. of Memebers: ${data[0].membersno}`}
                                </p>
                                <span class="text-1xl font-bold">
                                    {`Date: ${data[0].date}`}
                                </span>
                                <span class="ml-14 text-1xl font-bold">
                                    {`Gov. Token: ${data[0].token}`}
                                </span>
                            </div>
                            <div class="bg-slate-600 p-6 shadow-md shadow-white">
                                <h3 class="text-4xl font-semibold uppercase">
                                    {data[1].nftName}
                                </h3>
                                <p class="text-2xl font-semibold">
                                    {`Event name: ${data[1].eventName}`}
                                </p>
                                <p class="text-1xl font-bold">
                                    {`NFT  #${data[1].eventName}`}
                                </p>

                            </div>

                        </>
                    ))}
                </div>
              
            </div>
        </>
    );
}
// export default Perks;
