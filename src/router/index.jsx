import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import {HomePage} from '../pages/HomePage';
import {BrochureBlog} from '../routes/BrochureBlog';
import {ChronicleBlog} from '../routes/ChronicleBlog';
import { ExposureBlog } from "../routes/ExposureBlog";
import { VideoBlog } from "../routes/VideoBlog";
import { EntryCriticalThinking } from "../routes/EntryCriticalThinking";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<p>NOT FOUND</p>}>
            <Route index={true} path="/" element={<HomePage />} />
            <Route path="/brochure" element={<BrochureBlog />} />
            <Route path="/chronicle" element={<ChronicleBlog />} />
            <Route path="/exposure" element={<ExposureBlog />} />
            <Route path="/video" element={<VideoBlog />} />
            <Route path="/critical-thinking" element={<EntryCriticalThinking/>} />
        </Route>      
    )
)

export {router}