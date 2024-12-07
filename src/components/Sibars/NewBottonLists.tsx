import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";

import Modal from "react-modal";
import { Input } from "@mui/material";
Modal.setAppElement("#root"); // Add this line to avoid screen-reader issues with modal

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [folderName, setFolderName] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAction = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

//   form control
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!folderName) {
      setError("Folder name is required");
      return;
    }


    try {
      // Replace 'http://your-backend-api.com/folders' with your backend endpoint
      const response = await axios.post("http://your-backend-api.com/folders", {
        folderName,
      });
      console.log("Folder created:", response.data);
      setModalOpen(false); // Close modal after successful submission
      setFolderName(""); // Reset the folder name input
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          py: "10px",
          borderRadius: "10px",
          width: "100%", // Ensure button is full width
        }}
      >
        + New
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: anchorEl ? anchorEl.offsetWidth : "auto", // Dynamically set width to match the button
          },
        }}
      >
        <MenuItem
          onClick={handleAction}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          New Files
          <Icon icon="solar:folder-with-files-bold" />
        </MenuItem>
      </Menu>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
        className={`bg-white rounded-lg  max-w-sm p-4 h-fit  w-full overflow-y-auto relative z-[10001]`}
      >
        <h3
        className="text-xl font-bold mb-5"
        >
            New Folder
        </h3>
        <form onSubmit={handleSubmit}>
          <Input
            className="w-full"
            placeholder="Enter Folder Name"
            value={folderName}
            onChange={handleInputChange} // Update folder name state
          />
          {error && <span className="text-red-600 text-xs">  
            {error}
            </span>}
          <div className="w-full flex justify-between gap-5 my-5">
            <Button className="m-auto" type="button" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button className="m-auto" type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
