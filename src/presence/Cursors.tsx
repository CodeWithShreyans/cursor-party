import * as React from "react";
import Chat from "./Chat";
import OtherCursors from "./other-cursors";
import useCursorTracking from "./use-cursors";

const ENABLE_CHAT = false;

export default function Cursors() {
	useCursorTracking("document");

	return (
		<>
			<OtherCursors showChat={ENABLE_CHAT} />
			{ENABLE_CHAT && <Chat />}
		</>
	);
}
