import * as vscode from 'vscode'
import type { RemoteUriString } from './Downloader'

type uriStr = RemoteUriString

export function getUriPreifx(type: 'raw' | 'tarball') {

	const config = vscode.workspace.getConfiguration()
	const r = 'https://raw.githubusercontent.com/misode/mcmeta'
	const t = 'https://github.com/misode/mcmeta/tarball'

	switch (type) {
		case 'raw':
			return config.get<uriStr>('vscode-nbt.rawUriPrefix', r)
		case 'tarball':
			return config.get<uriStr>('vscode-nbt.tarballUriPrefix', t)
		default:
			throw new Error('Illegal parameter.')
	}

}
