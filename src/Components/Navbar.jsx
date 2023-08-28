import React, { useContext, useEffect, useRef, useState } from "react";
import "../App.css";
import CryptoJS from "crypto-js";




const Navbar = () => {


    // let dt = "JOINTBL" + '\t' + "vikram_12" + '\t' + 1 + '\t' + 31 + '\t' + "R" + '\t' + "NL" + "\t" + 9 + "\t" + "183.87.224.86" + '\t' + 2200 + '\n'
    let dt1 = "JOINTBL" + '\t' + "DemoUser5" + '\t' + 1 + '\t' + 43 + '\t' + "R" + '\t' + "NL" + "\t" + 8 + "\t" + "183.87.224.86" + '\t' + 6 + '\n'
    let dt2 = "JOINTBL" + '\t' + "DemoUser5" + '\t' + 1 + '\t' + 44 + '\t' + "R" + '\t' + "NL" + "\t" + 9 + "\t" + "183.87.224.86" + '\t' + 6 + '\n'
    // let dt3 = "JOINTBL" + '\t' + "vikram_12" + '\t' + 2 + '\t' + 3 + '\t' + "R" + '\t' + "PL" + "\t" + 6 + "\t" + "183.87.224.86" + '\t' + 2200 + '\n'
    const [data, setData] = useState([dt1, dt2])

    return (
        <>

            <div style={{ display: "" }}>
                <div
                    className="overlayTblParent  frt " // This className makes the popup through css.
                    // className="modal fade show"
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialogSettings modal-dialog-centered modal-dialog-scrollable  issue-modalContainerTblParent ">
                        <div className="modal-content">
                            {data.map((item, ind) => {
                                return (
                                    <div style={{border:"1px solid "}}>
                                        <TableComp item={item} ind={ind + 1} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};


const TableComp = ({ item, ind }) => {
    const [tablesocketData, setTableSocketdata] = useState({})
    const [TableData, setTableData] = useState([])
    const [socketmsg, setSocketmsg] = useState("")
    const socketRef = useRef(null); // Your WebSocket reference


    const Tablesocket = () => {
        //webSocket
        useEffect(() => {
            if (socketRef.current !== null) {
                socketRef.current.onclose()
                socketRef.current = null
            }
            socketRef.current = new WebSocket("wss://local.salusgames.net:8021/ws");  //local Table socket URL
            // socketRef.current = new WebSocket("wss://ring.salusgames.net:8021/ws");  //Remote Table socket URL

            socketRef.current.onopen = () => {
                setSocketmsg("websocket is connected");
                console.log(`Table ${ind}` + "websocket is connected");
            };
            socketRef.current.onerror = (e) => {
                setSocketmsg("error");
            };
            setTimeout(() => {
                if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {

                    if (item) {
                        const inckey = `iWUiG0QjOD2LJBZMN5ECDw==`
                        const key = CryptoJS.enc.Utf8.parse(inckey)
                        const iv = CryptoJS.enc.Utf8.parse("ASDDSADR")
                        const encoded = CryptoJS.enc.Utf8.parse(item)
                        const cipertext = CryptoJS.TripleDES.encrypt(encoded, key, { mode: CryptoJS.mode.CBC, iv: iv }).toString()
                        socketRef.current.send(cipertext)
                    }
                }
            }, 1000);
            socketRef.current.onmessage = (e) => {
                const inckey = `iWUiG0QjOD2LJBZMN5ECDw==`;
                const key = CryptoJS.enc.Utf8.parse(inckey);
                const iv = CryptoJS.enc.Utf8.parse("ASDDSADR");
                const cipertext = CryptoJS.TripleDES.decrypt(e.data, key, { mode: CryptoJS.mode.CBC, iv: iv });
                const decrypted = cipertext.toString(CryptoJS.enc.Utf8);
                setTableData([[decrypted]])
            };
            socketRef.current.onclose = () => {
                setSocketmsg("socket closed");
            };
            if (socketmsg === "websocket is connected" || socketmsg === "WebSocket reconnected.") {
                setTimeout(() => {
                    setSocketmsg(null)
                }, 90000);
            }
        }, [])
    }

    useEffect(() => {
        const lines = [];
        let currentLine = '';
        for (let i = 0; i < TableData.length; i++) {
            const char = TableData[i];
            if (char === '\n') {
                lines.push(currentLine);
                currentLine = '';
            } else {
                currentLine += char;
            }
        }
        // Push the last line if it's not empty
        if (currentLine.trim() !== '') {
            lines.push(currentLine);
        }
        const finalOutput = lines.map(line => line.split('\t'));
        processTblData(finalOutput)

        function processTblData(data) {
            for (let i = 0; i < data.length; i++) {
                const line = data[i];
                const command = line[0];
                console.log(`Table${ind} Data`)
                console.log(line)
                switch (command) {
                    case "TBLSPONSOR":
                        break;
                    case "OK":
                        break;
                    case "JOINTBL":
                        break;
                    case "CLEARTABLE":
                        break;
                    case "RESERVED":
                        break;
                    case "CLEARSTANDUPNSITOUT":
                        break;
                    case "RESERVEDSEATS":
                        break;
                    case "NOTTABLEFULL":
                        break;
                    case "CLEARJOINWAITLIST":
                        break;
                    case "DISABLEINVITE":
                        break;
                    case "TABLEINFOPLAYER":
                        const expectedOutput = line.slice(1).filter((item) => item !== "").map((item) => item.split("~"));
                        setTableSocketdata(prevData => ({ ...prevData, plrinfo: expectedOutput }))
                        break;
                    case "TABLEINFOWATCHER":
                        break;
                    case "GAMERAKE":
                        setTableSocketdata(prevData => ({ ...prevData, RAKE: line[1], RAKECAP: line[2] }))
                        break;
                    case "SESSIONLOGOUT":
                        setTableSocketdata(prevData => ({ ...prevData, SESSIONLOGOUT: true }))
                        break;
                    case "PLAYERS":
                        const [, GameID, TableID, SeatID, PlayerName, , Credit, , , , , , , , , , , Avatar] = line;
                        setTableSocketdata(prevData => ({
                            ...prevData, ALLData: {
                                ...prevData.ALLData, [GameID]: {
                                    ...prevData.ALLData?.[GameID],
                                    [SeatID]: {
                                        ...prevData.ALLData?.[GameID]?.[SeatID],
                                        TableID,
                                        PlayerName,
                                        Credit,
                                        Avatar
                                    }
                                }
                            }
                        }));
                        break;
                    case "MESSAGE":
                        setTableSocketdata(prevData => ({ ...prevData, MSG: line[1] }))
                        // if (popupId) {
                        //   const popup = document.querySelector(`#${"1"}`);
                        //   if (popup) {
                        //     const chatdiv = popup.querySelector('#msg-box');
                        //     if (chatdiv) {
                        //       const chatContent = chatdiv.innerHTML;
                        //       const lines = chatContent.split('<br>');
                        //       if (lines.length >= 70) {
                        //         lines.shift(); // Remove the oldest message
                        //       }
                        //       const newMessage = `${line[1]}`;
                        //       lines.push(newMessage); // Add the new message

                        //       // Rebuild the chat content with up to 20 messages
                        //       chatdiv.innerHTML = lines.join('<br>');
                        //     }
                        //   }
                        // }

                        break;
                }
            }
        }

    }, [TableData])

    Tablesocket()


    const OpenPopup = (ind) => {
        alert(`Table${ind}`)
    }

    return (
        <>
            <button onClick={() => OpenPopup(ind)} className="btn btn-success">Table {ind}</button>
            <div key={ind}>
                <p> RAKE :{tablesocketData?.RAKE}</p>
                <p> RAKE Cap:{tablesocketData?.RAKECAP}</p> 
                <p>  message :{tablesocketData.MSG} </p>
                
                <div style={{ display: "block" }}>
                    {tablesocketData.plrinfo?.length <= 0 ? (<div> No Data</div>) : (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Player Name</th>
                                    <th>Buy In</th>
                                    <th>Winnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tablesocketData && tablesocketData.plrinfo ? (tablesocketData.plrinfo.map((item, ind) => {
                                    return (<>
                                        <tr key={ind}>
                                            <td> <p className="mg-b-10">{item[0]}</p></td>
                                            <td> <p className="mg-b-10">{item[1]}</p></td>
                                            <td> <p className="mg-b-10">{item[2]}</p></td>
                                        </tr>
                                    </>
                                    )
                                })) : null}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    )
}





export default Navbar;
