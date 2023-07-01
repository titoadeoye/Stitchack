import { CloseIcon } from "../assets/svg";
import Modal from "react-modal";
import styled from "styled-components";
import { UploadImage } from ".";
import { useModalContext } from '../context/ModalContext';

const customStyles = {
	content: {
		background: "#fff",
		maxWidth: "90%",
		width: "500px",
		minHeight: "300px",
		height: "fit-content",
		maxHeight: "100vh",
		overflow: "auto",
		position: "relative",
		padding: "20px",
		border: "none",
		boxShadow: "2px 4px 8px 0 #eeeeee",
		outline: "none",
		
	},
};

Modal.setAppElement('#root');

const ModalGroup = () => {
	const { isOpenModal, setIsOpenModal, modalType } = useModalContext();


	return (
		<ModalWrapper id="modalwrap">
			<Modal
				className="wrap"
				isOpen={isOpenModal}
				style={customStyles}
				contentLabel="Modal"
			>
				<Close onClick={() => setIsOpenModal(false)}>
					<CloseIcon />
				</Close>
				{modalType === "avatar" ? (
					<UploadImage />
				)
					: <UploadImage />
				}
			</Modal>
		</ModalWrapper>
	)
}

const ModalWrapper = styled.div`

`;

const Close = styled.a`
	position: absolute;
	top: 20px;
	right: 20px;

	svg {
		width: 15px;
		aspect-ratio: 1;
	}

	&:hover {
		cursor: pointer;

		path {
			stroke: ${(props) => props.theme.primaryColor};
		}
	}
`;

export default ModalGroup;