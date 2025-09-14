export default function EmailVerified() {
	return (
		<div
			style={{
				margin: 0,
				padding: 0,
				fontFamily: "Arial, sans-serif",
				backgroundColor: "#f8f9fa",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					maxWidth: "600px",
					margin: "0 auto",
					backgroundColor: "white",
					padding: "40px 20px",
					borderRadius: "8px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
				}}
			>
				{/* Header */}
				<div
					style={{
						textAlign: "center",
						marginBottom: "40px",
					}}
				>
					<h1
						style={{
							color: "#6748F8",
							fontSize: "32px",
							fontWeight: "bold",
							margin: 0,
						}}
					>
						Success!
					</h1>
					<p
						style={{
							color: "#666",
							fontSize: "16px",
							margin: "10px 0 0 0",
						}}
					>
						Your email has been verified
					</p>
				</div>

				{/* Main Content */}
				<div
					style={{
						textAlign: "center",
						marginBottom: "40px",
					}}
				>
					<h2
						style={{
							color: "#333",
							fontSize: "24px",
							marginBottom: "20px",
						}}
					>
						Email Verified Successfully!
					</h2>
					<p
						style={{
							color: "#666",
							fontSize: "16px",
							lineHeight: "1.5",
							marginBottom: "30px",
						}}
					>
						Your account is now active and ready to use. You can now log in to
						access all features.
					</p>

					{/* CTA Button */}
					<a
						href="/login"
						style={{
							display: "inline-block",
							backgroundColor: "#6748F8",
							color: "white",
							textDecoration: "none",
							padding: "15px 30px",
							borderRadius: "8px",
							fontWeight: "bold",
							fontSize: "16px",
							marginRight: "10px",
						}}
					>
						Continue to Login
					</a>

					<a
						href="/"
						style={{
							display: "inline-block",
							backgroundColor: "transparent",
							color: "#6748F8",
							textDecoration: "none",
							padding: "15px 30px",
							borderRadius: "8px",
							fontWeight: "bold",
							fontSize: "16px",
							border: "2px solid #6748F8",
						}}
					>
						Go to Homepage
					</a>
				</div>

				{/* Footer */}
				<div
					style={{
						borderTop: "1px solid #eee",
						paddingTop: "20px",
						textAlign: "center",
					}}
				>
					<p
						style={{
							color: "#999",
							fontSize: "14px",
							margin: 0,
						}}
					>
						Welcome to your new account! Start exploring now.
					</p>
				</div>
			</div>
		</div>
	);
}
