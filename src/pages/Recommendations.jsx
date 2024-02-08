import React, { useCallback, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSec from "../components/HeroSec";
import axios from "axios";
import bgImg from "../assets/fgdf.jpg";

import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import { Handle, Position } from "reactflow";

import "reactflow/dist/style.css";

const initNodes = [
  {
    id: "1",
    type: "custom",
    data: { name: "Temperature(c)", value: "loading" },
    position: { x: 50, y: 200 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Humidity(%)", value: "loading" },

    position: { x: 250, y: 350 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "pH", value: "Developer" },
    position: { x: 250, y: 50 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "Rainfall(mm)", value: "Developer" },
    position: { x: 1000, y: 150 },
  },
  {
    id: "5",
    type: "custom",
    data: { name: "Potassium(mg/kg)", value: "Developer" },
    position: { x: 900, y: 380 },
  },
  {
    id: "6",
    type: "custom",
    data: { name: "Phosphorous(mg/kg)", value: "Developer" },
    position: { x: 1000, y: 280 },
  },
  {
    id: "7",
    type: "custom",
    data: { name: "Nitrogen(mg/kg)", value: "Developer" },
    position: { x: 900, y: 10 },
  },
  {
    id: "8",
    type: "custom",
    data: { name: "CROP PREDICTED", value: "loading" },
    position: { x: 500, y: 200 },
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "8",
    // animated: true,
  },
  {
    id: "e1-3",
    source: "2",
    target: "8",
    // animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    target: "8",
    // animated: true,
  },

  {
    id: "e4-7",
    source: "8",
    target: "4",
    // animated: true,
  },
  {
    id: "e5-6",
    source: "8",
    target: "5",
    // animated: true,
  },
  {
    id: "e6-8",
    source: "8",
    target: "6",
    // animated: true,
  },
  {
    id: "e8-7",
    source: "8",
    target: "7",
    // animated: true,
  },
];

function CustomNode({ data }) {
  return (
    <div className=" shadow-md rounded-md bg-[#e8ffa8] text-white">
      <div className="flex">
        <div className="ml-2">
          <div className="text-base font-bold ml-[-10px] px-4 py-2 border-b bg-[#6C9007]">
            {data.name}
          </div>

          <div className="px-3 py-2 w-full ml-[-10px] bg-[#e8ffa8] text-black text-center">
            {data.value}
          </div>
        </div>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

const Recommendations = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      effectRan.current = true;
      (async () => {
        const res = await axios.get("http://localhost:8000/");

        console.log(res.data);
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === "1") {
              node.data = {
                ...node.data,
                value: res.data.tempC,
              };
            } else if (node.id === "2") {
              node.data = {
                ...node.data,
                value: res.data.humi,
              };
            }

            return node;
          })
        );

        const resResult = await axios.get("http://localhost:8000/result");

        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === "8") {
              node.data = {
                ...node.data,
                value: resResult.data.name.toUpperCase(),
              };
            }
            return node;
          })
        );
      })();
    }
  }, [setNodes]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <NavBar />
      <HeroSec bgImg={bgImg} imgClass={"grayscale"} />
      <div className="relative z-[10] w-[90%] h-[75%]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          connectionLineStyle={{ stroke: "#fff" }}
          zoomOnScroll={false}
          draggable={false}
          nodeTypes={nodeTypes}
          proOptions={{
            hideAttribution: true,
          }}
          // zoom="true"
        />
      </div>
    </div>
  );
};

export default Recommendations;
