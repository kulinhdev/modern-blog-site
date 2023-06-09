import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import api from "@/services/backendApi";

function RegisterPage() {
	const router = useRouter();
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleRegister = async (formData) => {
		const res = await api.post("/api/auth/register", formData);
		console.log(res);
		const responseStatus = res.status;

		if (responseStatus == 201) {
			const { message } = res.data;

			// Display success message
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: message ?? "Registration Successful!",
				showConfirmButton: false,
				timer: 1500,
			});
			router.push("/client/auth/login");
		} else {
			// Get error message
			const responseMessage =
				res.response?.data.message ?? "Error occurs!";
			setError(responseMessage);
			// Display success message
			Swal.fire({
				icon: "error",
				title: "Registration failed!",
				text: error,
				confirmButtonColor: "#3085d6",
				confirmButtonText: "OK",
			});
		}
	};

	const validateFields = () => {
		let valid = true;

		Object.values(formData).forEach((value) => {
			if (!value) {
				valid = false;
			}
		});

		return valid;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (!validateFields()) {
			setError("Please fill out all fields");
			return;
		}

		try {
			await handleRegister(formData);
		} catch (error) {
			// Get error message
			const responseMessage =
				res.response?.data.message ?? "Error occurs!";
			setError(responseMessage);
			// Display success message
			Swal.fire({
				icon: "error",
				title: "Registration failed!",
				text: error,
				confirmButtonColor: "#3085d6",
				confirmButtonText: "OK",
			});
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
					Admin - Register
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						{error && (
							<div className="rounded-md bg-red-50 p-4">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg
											className="h-5 w-5 text-red-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.293-9.707a1 1 0 011.414 0L11 9.586l2.293-2.293a1 1 0 011.414 1.414L12.414 11l2.293 2.293a1 1 0 01-1.414 1.414L11 12.414l-2.293 2.293a1 1 0 01-1.414 0 1 1 0 010-1.414L9.586 11 7.293 8.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div className="ml-3">
										<h3 className="text-sm font-medium text-red-800">
											{error}
										</h3>
									</div>
								</div>
							</div>
						)}
						<div>
							<label
								htmlFor="userName"
								className="block text-sm font-medium text-gray-700"
							>
								UserName
							</label>
							<div className="mt-1 mb-4">
								<input
									type="text"
									id="userName"
									name="userName"
									value={formData.userName}
									onChange={handleChange}
									placeholder="UserName"
									className="border-gray-400 border-2 py-2 px-4 rounded w-full  text-stone-800"
								/>
								{error && !formData.userName && (
									<span className="my-2 ml-1 text-sm text-red-600">
										Filed username is required!
									</span>
								)}
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-gray-700"
								>
									FirstName
								</label>
								<div className="mt-1 mb-4">
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										placeholder="FirstName"
										className="border-gray-400 border-2 py-2 px-4 rounded w-full text-stone-800"
									/>
									{error && !formData.firstName && (
										<span className="my-2 ml-1 text-sm text-red-600">
											Filed firstName is required!
										</span>
									)}
								</div>
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-gray-700"
								>
									LastName
								</label>
								<div className="mt-1 mb-4">
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										placeholder="LastName"
										className="border-gray-400 border-2 py-2 px-4 rounded w-full text-stone-800"
									/>
									{error && !formData.lastName && (
										<span className="my-2 ml-1 text-sm text-red-600">
											Filed lastName is required!
										</span>
									)}
								</div>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<div className="mt-1 mb-4">
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									className="border-gray-400 border-2 py-2 px-4 rounded w-full text-stone-800"
								/>
								{error && !formData.email && (
									<span className="my-2 ml-1 text-sm text-red-600">
										Filed email is required!
									</span>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1 mb-4">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									placeholder="Password"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-stone-800 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									value={formData.password}
									onChange={handleChange}
								/>
								{error && !formData.password && (
									<span className="my-2 ml-1 text-sm text-red-600">
										Filed password is required!
									</span>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm Password
							</label>
							<div className="mt-1">
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									autoComplete="current-password"
									placeholder="Confirm Password"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-stone-800 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									value={formData.confirmPassword}
									onChange={handleChange}
								/>
								{error && !formData.confirmPassword && (
									<span className="my-2 ml-1 text-sm text-red-600">
										Filed confirm password is required!
									</span>
								)}
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
