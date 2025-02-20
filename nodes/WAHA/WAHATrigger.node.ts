import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import {BASE_TRIGGER_DESCRIPTION} from "./base/trigger";
import {WAHATriggerV202409} from "./v202409/WAHATriggerV202409";
import {WAHATriggerV202502} from "./v202502/WAHATriggerV202502";

export class WAHATrigger extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_TRIGGER_DESCRIPTION,
			defaultVersion: 202502,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202502: new WAHATriggerV202502(),
			202409: new WAHATriggerV202409(),
		};

		super(nodeVersions, baseDescription);
	}
}
