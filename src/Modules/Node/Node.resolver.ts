import { Resolver } from '@nestjs/graphql';
import {
	NodeInterface,
	NodeFieldResolver,
	ResolvedGlobalId,
} from 'nestjs-relay';

@Resolver(NodeInterface)
export class NodeResolver extends NodeFieldResolver {
	resolveNode(resolvedGlobalId: ResolvedGlobalId) {
		return null;
	}
}
