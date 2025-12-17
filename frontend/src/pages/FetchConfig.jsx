import { useState } from "react";
import { axiosInstance } from "../lib/axiosInstance";


export default function FetchConfig() {
  const [configId, setConfigId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      setResult(null);

      const res = await axiosInstance.get(`/configurations/${configId}`);
      setResult(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Configuration not found"
      );
    }
  };

  return (
    <div>
      <h2>Fetch Config</h2>

      <label>Config To Load (configId): </label>
      <input
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <p>
        Click the "Submit" button and the configId with this it will get from
        "http://localhost:8080/api/configurations/{`{id}`}"
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <>
          <h3>
            Result: http://localhost:8080/api/configurations/{configId}
          </h3>

          <pre>
            {result.map(row => row.join(", ")).join("\n")}
          </pre>
        </>
      )}
    </div>
  );
}
