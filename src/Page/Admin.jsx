import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import { GoogleSpreadsheet }  from 'google-spreadsheet';

const Admin = () => {
  const [state, setEstate] = useState("");
  const [value, setValue] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [Available, setAvailable] = useState("");
  const [AcrePrice, setAcrePrice] = useState("");
  const [Acre, setAcre] = useState("");
  const [Image, setImage] = useState("");
  const [Road, setRoad] = useState("");
  const [property, setProperty] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getState = async () => {
      try {
        const res = await axios.get("https://realesatate11.pythonanywhere.com/api/states/");
        setValue(res.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    getState();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Debugging statement

    if (!state) {
      alert("State name is required!");
      return;
    }

    try {
      await axios.post("https://realesatate11.pythonanywhere.com/api/states/", {
        name: state,
      });

      setEstate(""); // Clear input field
      navigate(0); // Refresh page
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
    }
  };


  async function insertPropertyData(propertyData) {
    // Initialize the Google Sheet
    const doc = new GoogleSpreadsheet('1szKUG6Ca9Bw0PpnV-W1zl_jkbn-Mif2ZknUZiFY1S1w');
  
    // Use the service account credentials
    await doc.useServiceAccountAuth({
      client_email: 'rajeev-ranjan@radiant-destiny-446418-e0.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCBbqxTqI4QVXQq\nADjTxJ5qnj7Wu/zBZdjwVdvUVpz7UKz7d497K7Zx89QL/O4rodNlgpQGrCIAgEiv\noUZxyOFFZYo/pOJeZofP9rAFkakjGaFX5wOM/TwLXBFrj2tTmxAXp5c9e1ou0SKj\nj8jjfQWzW44YxfAAtY78i1/6TJJ8sgCX9r8AMKaKDTmPMJLuQz0UAzu+nL4u9mz4\nUc3fcpJEYzIp/syIu4JhF3tJSnEYLIy5u4QKLni2nVPtqbrpXcg8dIU+/OGdVI7Y\n0z85TKcOhJjPZtJMmLnF1Am0JEcNB8TzLFUgW6AslpV+TpbsLQcmSjqTr+UohlLA\n1wpsb/XdAgMBAAECggEAO2UIG1PL7V7pcaSsbzFY6OA5Qdz+Pdl41cDwod4lJ4Z7\n+uGArCsBDAWyFtY4jTkzgu+K8gznhYdY04+Uff6KsYfJCy+k2WD/jcVMPSH8lajb\nSzUtgfNrLGNRcyRbQgB0QAad9o62caly1c/TheEHTqkC6gda/VhThzyGDJw61JFL\nd/5yF/EwF/T98MUjYAdTa8JJ0J12AFk0QXfEOA1j2ZEwVNLbjfJzfGgHm3hYWNpZ\n4NeR1NC6jmvkzGQY7oYLkBnUae1zUyCrycCsC5TxhOYnEwlcGP/w+XozLp3+iN3X\nMrmKt0lsrn6F5+T+ClYrJCKF5ERc1ONkHI/vDGrRGQKBgQC2ZqMQdX+x62xVo2Y5\nDX+sHYgKFb3apC4nMCKW1bXeMls3rRS8QhDiT9jXTW5Mcx5Sa6aqtOQ/SCOHs1ww\nudYGUNDhA2b3EMssfx1Pw94S75oBbhpUZItwuWb4PjrSGlZ7ZmaXvy1w8ZEiQ41/\nMOgzTcZnjs+/2y71AWz+ssbpEwKBgQC1qJGDwWXKk3N4KCrypcAdbJV3eFtEDn3w\nDpkphaEFqVrJjxYnfaf5Z9G7zjv1pX4FxhN215eORdEocq5UsFkBy7kfTmHLA6zj\nzWxoVOxmCUw+vVA+n2hD8jKztz4cWCOs72PaR8uhAdM9rvCkpoOVvLdtBHtZrSd7\n++KvmgvzTwKBgGDXL14utARXdOYm4cAKva045KBOGMV7g5GEyeiBQJTe8XUm7Kpi\n/SnasMrmrlfiisfBpfReJAzBFTQX8ytfjxU9VRkSQFmOTgCq4HoYCNDO61o1Bb+m\nvi20Ecpc58fi+eV8YZ3Rf6PGbYLekMJlyfJrKZqTxRMcoNqtzhuP+XGHAoGBAK77\n3pe0/rGBEZRn1N8BbKqrQtrfM8K91vAbj8vgbbg/ZzWKwENwFhL3v58RzM4WCOvU\n3kD28YVZmV1GAsmPSV2ieQNABJGDS9HvugJR85liUXCJ+bco5E23CsH0vD6fZFYc\nDupfiDXixTHAxwtDXrMpIuM/kvZSBhu3CagvUl2fAoGBAJvaEdBq9BKxopd0aIbk\nB6nkx1cAyRtJI3Iv7xyoBQvlvpFhi9eiI0zFLyh2otMW9ambWvt5gbGYx/5vNAxT\nkTKJd0Ok00MUIuhEAbsqwXO0M/m+eXDczc9lDo5u5paQs6Bw7C3lR1bTQ3upfWCm\nRCLMTQnfbi1oOW8Q5MA1Kppi\n-----END PRIVATE KEY-----\n',
    });
  
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Assuming you're using the first sheet
  
    // Prepare the data to be inserted
    const row = {
      img: propertyData.img,
      property_name: propertyData.property_name,
      acre_price: propertyData.acre_price,
      acre: propertyData.acre,
      available: propertyData.available,
      road_width: propertyData.road_width,
    };
  
    // Add the row to the sheet
    await sheet.addRow(row);
    console.log('Data inserted successfully!');
  }



  const createProperty = async (e) => {
    e.preventDefault();
    console.log("Property submit called"); // Debugging statement

    const newProperty = {
        property_name: property,
        img: Image,
        acre_price: parseFloat(AcrePrice),
        road_width: parseFloat(Road),
        acre: parseFloat(Acre),
        state: selectedState,
        available: Available === "true", // Convert string to boolean
      };


    try {
     const res =   await axios.post("https://realesatate11.pythonanywhere.com/api/properties/", newProperty);

     if (res.status === 200) {
        console.log("Property created successfully!");
        insertPropertyData(newProperty);
    }
    

      // Reset form fields
      setAvailable("");
      setAcrePrice("");
      setAcre("");
      setImage("");
      setRoad("");
      setProperty("");
      setSelectedState("");

      navigate(0); // Refresh page
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <div className="h-full w-full p-4">
      <h3 className="text-center font-bold text-lg">Admin Panel</h3>

      <div className="flex flex-col gap-2 mt-4">
        {/* State Buttons */}
        <div className="flex gap-2">
          {value?.map((e) => (
            <Button key={e.id} className="ml-4">
              {e?.name}
            </Button>
          ))}
        </div>

        {/* Create State Form */}
        <div className="flex">
          <form  className="flex gap-2">
            <Input
              style={{ width: "200px" }}
              type="text"
              value={state}
              onChange={(e) => setEstate(e.target.value)}
              placeholder="State Name"
            />
            <Button onClick={onSubmit} className="border-2">
              Create
            </Button>
          </form>
        </div>
      </div>

      {/* Create Property Form */}
      <div className="flex flex-col mt-6 gap-5">
        <h3 className="text-start font-semibold text-lg">Create a Property</h3>

        <form  className="space-y-3">
          <Input
            style={{ width: "100%" }}
            type="text"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            placeholder="Property Name"
          />
          <Input
            style={{ width: "100%" }}
            type="text"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
          <Input
            style={{ width: "100%" }}
            type="number"
            value={AcrePrice}
            onChange={(e) => setAcrePrice(e.target.value)}
            placeholder="Acre Price"
          />
          <Input
            style={{ width: "100%" }}
            type="number"
            value={Road}
            onChange={(e) => setRoad(e.target.value)}
            placeholder="Road Width"
          />
          <Input
            style={{ width: "100%" }}
            type="number"
            value={Acre}
            onChange={(e) => setAcre(e.target.value)}
            placeholder="Acre"
          />

          {/* State Dropdown */}
          <select
            style={{ width: "100%", padding: "8px" }}
            className="border rounded-md"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {value?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          {/* Available Dropdown */}
          <select
            style={{ width: "100%", padding: "8px" }}
            className="border rounded-md"
            value={Available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="">Available?</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>

          {/* Submit Button */}
          <Button
            style={{ width: "100%", marginTop: "10px" }}
            className="border-2 bg-blue-500 text-white hover:bg-blue-600"
           onClick={createProperty}
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
