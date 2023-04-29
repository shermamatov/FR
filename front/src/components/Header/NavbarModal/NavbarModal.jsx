import React from "react";
import "./NavbarModal.scss";
const NavbarModal = ({ setModal, modal }) => {
    return (
        <div
            onMouseOver={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
            className="nav_modal"
            style={{ display: `${modal ? "flex" : "none"}` }}
        >
            <ul>
                <li>Wood Restoration</li>
                <li>Scratch Repair</li>
                <li>Repair</li>
                <li>Wood Stain</li>
                <li>Refinish</li>
                <li>Restoration</li>
                <li>Strip</li>
                <li>Crack</li>
                <li>French Polish</li>
                <li>Cane Repair</li>
            </ul>
            <ul>
                <li>Wood Restoration</li>
                <li>Scratch Repair</li>
                <li>Repair</li>
                <li>Wood Stain</li>
                <li>Refinish</li>
                <li>Restoration</li>
                <li>Strip</li>
                <li>Crack</li>
                <li>French Polish</li>
                <li>Cane Repair</li>
            </ul>
            <ul>
                <li>Wood Restoration</li>
                <li>Scratch Repair</li>
                <li>Repair</li>
                <li>Wood Stain</li>
                <li>Refinish</li>
                <li>Restoration</li>
                <li>Strip</li>
                <li>Crack</li>
                <li>French Polish</li>
                <li>Cane Repair</li>
            </ul>
        </div>
    );
};

export default NavbarModal;
