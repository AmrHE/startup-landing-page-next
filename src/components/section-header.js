import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, isWhite }) {
	return (
		<Box sx={{ variant: "sectionHeader" }}>
			<Text
				as="p"
				sx={{
					variant: "sectiionHeader.subTitle",
					color: isWhite ? "white" : "primary",
					opacity: isWhite ? 0.7 : 1,
				}}
			>
				{slogan}
			</Text>
			<Heading
				as="h2"
				sx={{
					variant: "sectiionHeader.title",
					color: isWhite ? "white" : "heading",
				}}
			>
				{title}
			</Heading>
		</Box>
	);
}
