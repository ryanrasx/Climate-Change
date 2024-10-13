// components/Map.tsx

'use client' 
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaFireAlt } from "react-icons/fa";

export interface ClimateIssue {
    id: number;
    title: string;
    description: string;
    coordinates: [number, number]; // [latitude, longitude]
}

interface MapProps {
    issues: ClimateIssue[];
}

const Map: React.FC<MapProps> = ({ issues }) => {
    return (
        <MapContainer center={[37.0902, -95.7129]} zoom={4} style={{ height: '50vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {issues.map((issue: ClimateIssue) => (
                <Marker key={issue.id} position={issue.coordinates} >
                    <Popup>
                        <h3>{issue.title}</h3>
                        <p>{issue.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
