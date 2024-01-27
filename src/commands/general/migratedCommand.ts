import { MessageCommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

const migratedCommandEmbed = makeEmbed({
    title: 'FlyByWire Discord Bot | Command replaced with a `/`-command',
    description: 'The command your are trying to execute is no longer served as a prefix command. Instead look for a `/`-based command with the same functionality.',
});

export const migratedCommand: MessageCommandDefinition = {
    name: [
        'ask',
        'av',
        'avatar',
        'ban',
        'birthday',
        'cache-update',
        'cacheupdate',
        'calc',
        'count',
        'deletewarn',
        'deletewarning',
        'delwarn',
        'docsearch',
        'documentation',
        'doc',
        'docs',
        'ev',
        'event',
        'events',
        'faq',
        'flight',
        'flights',
        'issues',
        'listwarn',
        'listwarnings',
        'liveflights',
        'membercount',
        'metar',
        'migrated-command',
        'ping',
        'pr',
        'removetimeout',
        'reportedissues',
        'roleassignment',
        'roleinfo',
        'rules',
        'simbriefdata',
        'slowmode',
        'station',
        'taf',
        'timeout',
        'unban',
        'untimeout',
        'vatdata',
        'vatev',
        'vatevents',
        'vatsim',
        'vatsimdata',
        'vatsimevents',
        'wa',
        'warn',
        'warnings',
        'warns',
        'welcome',
        'whois',
        'zulu',
    ],
    description: 'Provides an explanation for migrated commands',
    category: CommandCategory.GENERAL,
    genericEmbed: migratedCommandEmbed,
};
