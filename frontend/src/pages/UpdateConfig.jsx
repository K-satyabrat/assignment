import { useState } from "react";
import { axiosInstance } from "../lib/axiosInstance";

export default function UpdateRemark() {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      setMessage("");

      const res = await axiosInstance.put(`/configurations/${configId}`, {
        remark,
      });

      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <div>
      <h2>Update Remark</h2>

      <label>Config To Update (configId): </label>
      <input value={configId} onChange={(e) => setConfigId(e.target.value)} />
      <br />
      <br />

      <label>Remark</label>
      <br />
      <textarea
        rows="4"
        cols="40"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <p>
        Click the "Submit" button and the configId and remark will "PUT" on api<br></br>
        "http://localhost:8080/api/configurations/{`{id}`}"and remark gets
        updated for the provided configId
      </p>

      {message && (
        <>
          <h4>PUT: http://localhost:8080/api/configurations/{configId}</h4>
          <p style={{ color: "green" }}>{message}</p>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
