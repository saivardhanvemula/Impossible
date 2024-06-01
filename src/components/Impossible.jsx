import { useState, useEffect, useRef } from "react";
import React from "react";
import "./Impossible.css";

export const Impossible = () => {
    const isFirstRender = useRef(true);
    const [coords, setCoords] = useState([]);
    const [Bomb, setBomb] = useState(false);
    const [Admin, setAdmin] = useState(false);
    const [Adminbtn, setAdminbtn] = useState([]);

    function getRandomCoordinates(n1, n2) {
        const coordsSet = new Set();
        if (!Admin) {
            coordsSet.add(`${n1},${n2}`);
        }
        while (coordsSet.size < 2) {
            const a = Math.floor(Math.random() * 5) + 1;
            const b = Math.floor(Math.random() * 5) + 1;
            if (a == Adminbtn[0] && b == Adminbtn[1]) {
                continue;
            }
            coordsSet.add(`${a},${b}`);
        }
        const coordsArray = Array.from(coordsSet);
        return coordsArray;
    }
    function placeBomb(e) {
        if (!Bomb) {
            let n = e.target.className.split(" ")[1];
            setAdminbtn([Number(n[1]), Number(n[2])]);
            setCoords([getRandomCoordinates(Number(n[1]), Number(n[2]))]);
        }
    }

    useEffect(() => {
        if (!isFirstRender.current) {
            coords.forEach((coordArray) => {
                coordArray.forEach((coord) => reveal(coord));
                if (Admin) {
                    let n = document.querySelector(
                        `.b${Adminbtn[0]}${Adminbtn[1]}`
                    );
                    n.classList.add("green");
                }
                disable();
                setBomb(true);
            });
        } else {
            isFirstRender.current = false;
        }
    }, [coords]);

    useEffect(() => {});
    function reveal(n) {
        // console.log(n);
        const button = document.querySelector(`.b${n[0]}${n[2]}`);
        if (button) {
            button.classList.add("red");
        }
    }
    function disable() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((i) => {
            i.classList.add("disable");
        });
    }
    function enable() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            btn.classList.remove("disable", "red", "green");
        });
    }
    function reset() {
        // console.log("reseting");
        setCoords([]);
        enable();
        setBomb(false);
        setAdmin(false);
    }
    function DoubleClick() {
        // console.log("2 clicks");
        setAdmin(true);
    }
    return (
        <>
            <h2>The Impossible Game</h2>
            <div className="board">
                <div className="btn b11" onClick={placeBomb}></div>
                <div className="btn b12" onClick={placeBomb}></div>
                <div className="btn b13" onClick={placeBomb}></div>
                <div className="btn b14" onClick={placeBomb}></div>
                <div className="btn b15" onClick={placeBomb}></div>
                <div className="btn b21" onClick={placeBomb}></div>
                <div className="btn b22" onClick={placeBomb}></div>
                <div className="btn b23" onClick={placeBomb}></div>
                <div className="btn b24" onClick={placeBomb}></div>
                <div className="btn b25" onClick={placeBomb}></div>
                <div className="btn b31" onClick={placeBomb}></div>
                <div className="btn b32" onClick={placeBomb}></div>
                <div className="btn b33" onClick={placeBomb}></div>
                <div className="btn b34" onClick={placeBomb}></div>
                <div className="btn b35" onClick={placeBomb}></div>
                <div className="btn b41" onClick={placeBomb}></div>
                <div className="btn b42" onClick={placeBomb}></div>
                <div className="btn b43" onClick={placeBomb}></div>
                <div className="btn b44" onClick={placeBomb}></div>
                <div className="btn b45" onClick={placeBomb}></div>
                <div className="btn b51" onClick={placeBomb}></div>
                <div className="btn b52" onClick={placeBomb}></div>
                <div className="btn b53" onClick={placeBomb}></div>
                <div className="btn b54" onClick={placeBomb}></div>
                <div className="btn b55" onClick={placeBomb}></div>
            </div>
            <button
                className="reset"
                onClick={reset}
                onDoubleClick={DoubleClick}
            >
                Reset
            </button>
        </>
    );
};
