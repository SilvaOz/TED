import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import '../styles/Header.css'


import 'primeicons/primeicons.css';

export default function BasicDemo() {
    const items = [
        {
            label: <Link to="/about">About</Link>
        },

        {
            label: 'Services',
            // label: <Link to="/services">Services</Link>,
            className: 'services-menu-item',
            items: [
                {
                    label: <Link to="/services/sound-healing">SoundHealing</Link>
                },
                {
                    label: <Link to="/services/breathwork">Breathwork</Link>
                },
                {
                    label: <Link to="/services/vegan-dinner">Vegan Dinner</Link>
                },
                {
                    label: 'Classes',
                    items: [
                        {
                            label: <Link to="/classes/didgeridoo-classes">Didgeridoo </Link>
                        },
                        {
                            label: <Link to="/classes/drums-classes">Drums</Link>
                        }
                    ]
                },
                {
                    label: 'Products',
                    items: [
                        {
                            label: <Link to="/products/instruments">Instruments</Link>
                        },
                        {
                            label: <Link to="/products/others">Others</Link>
                        }
                    ]
                }

            ]
        },
        {
            label: <Link to="/reservations">Reservation</Link>
        },
        {
            label: <Link to="/members">Members</Link>
        },
        {
            label: <Link to="/contact">Contact</Link>
        }
    ];

    return (
        <div >
            <Menubar model={items} />

        </div>
    )
}
