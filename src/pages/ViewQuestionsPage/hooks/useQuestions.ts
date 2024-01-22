enum option {
    a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e',
    f = 'f'
}
type answer = {
    option: option;
    text: string;
};
type question = {
    chapter: number;
    question: string;
    answers: answer[];
    correct: option[];
    comment: string;
};

const useQuestions = (): question[] => {
    return [
        {
            chapter: 2,
            question:
                'Which three areas of router security must be maintained to secure an edge router at the network perimeter? (Choose three.)',
            answers: [
                { option: option.a, text: 'remote access security' },
                { option: option.b, text: 'zone isolation' },
                { option: option.c, text: 'router hardening' },
                { option: option.d, text: 'operating system security' },
                { option: option.e, text: 'flash security' },
                { option: option.f, text: 'physical security' }
            ],
            correct: [option.c, option.d, option.f],
            comment:
                'There are three areas of router security to maintain:\n' +
                '1) physical security\n' +
                '2) router hardening\n' +
                '3) operating system security'
        },
        {
            chapter: 2,
            question:
                'Which recommended security practice prevents attackers from performing password recovery on a Cisco IOS router for the purpose of gaining access to the privileged EXEC mode?',
            answers: [
                {
                    option: option.a,
                    text: 'Locate the router in a secure locked room that is accessible only to authorized personnel.'
                },
                {
                    option: option.b,
                    text: 'Configure secure administrative control to ensure that only authorized personnel can access the router.'
                },
                {
                    option: option.c,
                    text: 'Keep a secure copy of the router Cisco IOS image and router configuration file as a backup.'
                },
                {
                    option: option.d,
                    text: 'Provision the router with the maximum amount of memory possible.'
                },
                {
                    option: option.e,
                    text: 'Disable all unused ports and interfaces to reduce the number of ways that the router can be accessed.'
                }
            ],
            correct: [option.a],
            comment:
                'Of the three areas of router security, physical security, router hardening, and operating system security, physical security involves locating the router in a secure room accessible only to authorized personnel who can perform password recovery.'
        },
        {
            chapter: 2,
            question:
                'What is the default privilege level of user accounts created on Cisco routers?',
            answers: [
                { option: option.a, text: '0' },
                { option: option.b, text: '15' },
                { option: option.c, text: '1' },
                { option: option.d, text: '16' }
            ],
            correct: [option.c],
            comment:
                'There are 16 privilege levels that can be configured as part of the username command, ranging from 0 to 15. By default, if no level is specified, the account will have privilege level 1.'
        },
        {
            chapter: 2,
            question:
                'A network administrator notices that unsuccessful login attempts have caused a router to enter quiet mode. How can the administrator maintain remote access to the networks even during quiet mode?',
            answers: [
                {
                    option: option.a,
                    text: 'Quiet mode behavior can be enabled via an ip access-group command on a physical interface.'
                },
                {
                    option: option.b,
                    text: 'Quiet mode behavior will only prevent specific user accounts from attempting to authenticate.'
                },
                {
                    option: option.c,
                    text: 'Quiet mode behavior can be overridden for specific networks by using an ACL.'
                },
                {
                    option: option.d,
                    text: 'Quiet mode behavior can be disabled by an administrator by using SSH to connect.'
                }
            ],
            correct: [option.c],
            comment:
                'Quiet mode prevents any further login attempts for a period of time. Quiet mode is enabled via the login quiet-mode access-class command. Quiet mode behavior can be overridden for specific networks by building and implementing an access control list (ACL).'
        },
        {
            chapter: 2,
            question:
                'Which two characteristics apply to role-based CLI access superviews? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'A specific superview cannot have commands added to it directly.'
                },
                {
                    option: option.b,
                    text: 'CLI views have passwords, but superviews do not have passwords.'
                },
                {
                    option: option.c,
                    text: 'A single superview can be shared among multiple CLI views.'
                },
                {
                    option: option.d,
                    text: 'Deleting a superview deletes all associated CLI views.'
                },
                {
                    option: option.e,
                    text: 'Users logged in to a superview can access all commands specified within the associated CLI views.'
                }
            ],
            correct: [option.a, option.e],
            comment:
                'By using a superview, an administrator can assign users or groups of users to CLI views which contain a specific set of commands those users can access. Commands cannot be added directly to a superview but rather must be added to a CLI view and the CLI view added to the superview.'
        },
        {
            chapter: 2,
            question:
                'Which three types of views are available when configuring the role-based CLI access feature? (Choose three.)',
            answers: [
                { option: option.a, text: 'superview' },
                { option: option.b, text: 'admin view' },
                { option: option.c, text: 'root view' },
                { option: option.d, text: 'superuser view' },
                { option: option.e, text: 'CLI view' },
                { option: option.f, text: 'config view' }
            ],
            correct: [option.a, option.c, option.e],
            comment:
                'There are three types of Role-based CLI views:\n1) root view\n2) CLI view\n3) superview'
        },
        {
            chapter: 2,
            question:
                'If AAA is already enabled, which three CLI steps are required to configure a router with a specific view? (Choose three.)',
            answers: [
                {
                    option: option.a,
                    text: 'Create a superview using the parser view view-name command.'
                },
                {
                    option: option.b,
                    text: 'Associate the view with the root view.'
                },
                {
                    option: option.c,
                    text: 'Assign users who can use the view.'
                },
                {
                    option: option.d,
                    text: 'Create a view using the parser view view-name command.'
                },
                {
                    option: option.e,
                    text: 'Assign a secret password to the view.'
                },
                { option: option.f, text: 'Assign commands to the view.' }
            ],
            correct: [option.d, option.e, option.f],
            comment:
                'There are five steps involved to create a view on a Cisco router.\n1) AAA must be enabled.\n2) the view must be created.\n3) a secret password must be assigned to the view.\n4) commands must be assigned to the view.\n5) view configuration mode must be exited.'
        },
        {
            chapter: 2,
            question:
                'What occurs after RSA keys are generated on a Cisco router to prepare for secure device management?',
            answers: [
                {
                    option: option.a,
                    text: 'The keys must be zeroized to reset Secure Shell before configuring other parameters.'
                },
                {
                    option: option.b,
                    text: 'All vty ports are automatically configured for SSH to provide secure management.'
                },
                {
                    option: option.c,
                    text: 'The general-purpose key size must be specified for authentication with the crypto key generate rsa general-keys modulus command.'
                },
                {
                    option: option.d,
                    text: 'The generated keys can be used by SSH.'
                }
            ],
            correct: [option.d],
            comment:
                'Once RSA keys are generated, SSH is automatically enabled.'
        },
        {
            chapter: 2,
            question:
                'Which three statements describe limitations in using privilege levels for assigning command authorization? (Choose three.)',
            answers: [
                {
                    option: option.a,
                    text: 'Creating a user account that needs access to most but not all commands can be a tedious process.'
                },
                {
                    option: option.b,
                    text: 'Views are required to define the CLI commands that each user can access.'
                },
                {
                    option: option.c,
                    text: 'Commands set on a higher privilege level are not available for lower privilege users.'
                },
                {
                    option: option.d,
                    text: 'It is required that all 16 privilege levels be defined, whether they are used or not.'
                },
                {
                    option: option.e,
                    text: 'There is no access control to specific interfaces on a router.'
                },
                {
                    option: option.f,
                    text: 'The root user must be assigned to each privilege level that is defined.'
                }
            ],
            correct: [option.a, option.c, option.e],
            comment:
                'An administrator can create customized privilege levels and assign different commands to each level. However, this method of controlling the level of access to the router has limitations. Using privilege levels access to specific interfaces or ports cannot be controlled and availability of commands cannot be customized across levels.'
        },
        {
            chapter: 2,
            question:
                'What command must be issued to enable login enhancements on a Cisco router?',
            answers: [
                { option: option.a, text: 'privilege exec level' },
                { option: option.b, text: 'login delay' },
                { option: option.c, text: 'login block-for' },
                { option: option.d, text: 'banner motd' }
            ],
            correct: [option.c],
            comment:
                'Cisco IOS login enhancements can increase the security for virtual login connections to a router. Although login delay is a login enhancement command, all login enhancements are disabled until the login block-for command is configured.'
        },
        {
            chapter: 2,
            question:
                'An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)',
            answers: [
                { option: option.a, text: 'Enable inbound vty SSH sessions.' },
                { option: option.b, text: 'Generate two-way pre-shared keys.' },
                { option: option.c, text: 'Configure DNS on the router.' },
                {
                    option: option.d,
                    text: 'Configure the IP domain name on the router.'
                },
                {
                    option: option.e,
                    text: 'Enable inbound vty Telnet sessions.'
                },
                { option: option.f, text: 'Generate the SSH keys.' }
            ],
            correct: [option.a, option.d, option.f],
            comment:
                'There are four steps to configure SSH support on a Cisco router:\nStep 1: Set the domain name.\nStep 2: Generate one-way secret keys.\nStep 3: Create a local username and password.\nStep 4: Enable SSH inbound on a vty line.'
        },
        {
            chapter: 2,
            question:
                'Which set of commands are required to create a username of admin, hash the password using MD5, and force the router to access the internal username database when a user attempts to access the console?',
            answers: [
                {
                    option: option.a,
                    text: 'R1(config)# username admin password Admin01pa55\nR1(config)# line con 0\nR1(config-line)# login local'
                },
                {
                    option: option.b,
                    text: 'R1(config)# username admin secret Admin01pa55\nR1(config)# line con 0\nR1(config-line)# login local'
                },
                {
                    option: option.c,
                    text: 'R1(config)# username admin Admin01pa55 encr md5\nR1(config)# line con 0\nR1(config-line)# login local'
                }
            ],
            correct: [option.c],
            comment:
                'To configure a user account with an encrypted password, the username secret command is used. The line con 0 command defines the console line as configured for login and the login local command tells the router to look in the local database for the user credentials.'
        },
        {
            chapter: 2,
            question:
                'What is a characteristic of the Cisco IOS Resilient Configuration feature?',
            answers: [
                {
                    option: option.a,
                    text: 'It maintains a secure working copy of the bootstrap startup program.'
                },
                {
                    option: option.b,
                    text: 'Once issued, the secure boot-config command automatically upgrades the configuration archive to a newer version after new configuration commands have been entered.'
                },
                {
                    option: option.c,
                    text: 'A snapshot of the router running configuration can be taken and securely archived in persistent storage.'
                },
                {
                    option: option.d,
                    text: 'The secure boot-image command works properly when the system is configured to run an image from a TFTP server.'
                }
            ],
            correct: [option.c],
            comment:
                'The Cisco IOS Resilient Configuration feature maintains a secure working copy of the router IOS image file and a copy of the running configuration file. The secure boot-image command functions properly only when the system is configured to run an image from a flash drive with an ATA interface. The secure boot-config command has to be used repeatedly to upgrade the configuration archive to a newer version after new configuration commands have been issued. A snapshot of the router running configuration can be taken and securely archived in persistent storage using the secure boot-config command.'
        },
        {
            chapter: 2,
            question:
                'What are two reasons to enable OSPF routing protocol authentication on a network? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'to provide data security through encryption'
                },
                {
                    option: option.b,
                    text: 'to ensure faster network convergence'
                },
                { option: option.c, text: 'to ensure more efficient routing' },
                {
                    option: option.d,
                    text: 'to prevent data traffic from being redirected and then discarded'
                },
                {
                    option: option.e,
                    text: 'to prevent redirection of data traffic to an insecure link'
                }
            ],
            correct: [option.d, option.e],
            comment:
                'The reason to configure OSPF authentication is to mitigate against routing protocol attacks like redirection of data traffic to an insecure link, and redirection of data traffic to discard it. OSPF authentication does not provide faster network convergence, more efficient routing, or encryption of data traffic.'
        },
        {
            chapter: 2,
            question:
                'Which two options can be configured by Cisco AutoSecure? (Choose two.)',
            answers: [
                { option: option.a, text: 'enable secret password' },
                { option: option.b, text: 'interface IP address' },
                { option: option.c, text: 'SNMP' },
                { option: option.d, text: 'security banner' },
                { option: option.e, text: 'syslog' }
            ],
            correct: [option.a, option.d],
            comment:
                'AutoSecure executes a script that first makes recommendations for fixing security vulnerabilities and then modifies the security configuration of the router. AutoSecure can lock down the management plane functions and the forwarding plane services and functions of a router, and this includes setting an enable password, and a security banner.'
        },
        {
            chapter: 2,
            question:
                'Which three functions are provided by the syslog logging service? (Choose three.)',
            answers: [
                {
                    option: option.a,
                    text: 'setting the size of the logging buffer'
                },
                {
                    option: option.b,
                    text: 'specifying where captured information is stored'
                },
                { option: option.c, text: 'gathering logging information' },
                {
                    option: option.d,
                    text: 'authenticating and encrypting data sent over the network'
                },
                {
                    option: option.e,
                    text: 'distinguishing between information to be captured and information to be ignored'
                },
                {
                    option: option.f,
                    text: 'retaining captured messages on the router when a router is rebooted'
                }
            ],
            correct: [option.b, option.c, option.e],
            comment:
                'Syslog operations include gathering information, selecting which type of information to capture, and directing the captured information to a storage location. The logging service stores messages in a logging buffer that is time-limited, and cannot retain the information when a router is rebooted. Syslog does not authenticate or encrypt messages.'
        },
        {
            chapter: 2,
            question:
                'What is the Control Plane Policing (CoPP) feature designed to accomplish?',
            answers: [
                {
                    option: option.a,
                    text: 'disable control plane services to reduce overall traffic'
                },
                {
                    option: option.b,
                    text: 'prevent unnecessary traffic from overwhelming the route processor'
                },
                {
                    option: option.c,
                    text: 'direct all excess traffic away from the route process'
                },
                {
                    option: option.d,
                    text: 'manage services provided by the control plane'
                }
            ],
            correct: [option.b],
            comment:
                'Control Plane Policing (CoPP) does not manage or disable any services. It does not direct traffic away from the route processor, but rather it prevents unnecessary traffic from getting to the route processor.'
        },
        {
            chapter: 2,
            question:
                'What is a requirement to use the Secure Copy Protocol feature?',
            answers: [
                {
                    option: option.a,
                    text: 'At least one user with privilege level 1 has to be configured for local authentication.'
                },
                {
                    option: option.b,
                    text: 'A command must be issued to enable the SCP server side functionality.'
                },
                {
                    option: option.c,
                    text: 'A transfer can only originate from SCP clients that are routers.'
                },
                {
                    option: option.d,
                    text: 'The Telnet protocol has to be configured on the SCP server side.'
                }
            ],
            correct: [option.b],
            comment:
                'The Secure Copy Protocol feature relies on SSH and requires that AAA authentication and authorization be configured so that the router can determine whether the user has the correct privilege level. For local authentication, at least one user with privilege level 15 has to be configured. Transfers can originate from any SCP client whether that client is another router, switch, or workstation. The ip scp server enable command has to be issued to enable the SCP server side functionality.'
        },
        {
            chapter: 2,
            question: 'What is a characteristic of the MIB?',
            answers: [
                {
                    option: option.a,
                    text: 'The OIDs are organized in a hierarchical structure.'
                },
                {
                    option: option.b,
                    text: 'Information in the MIB cannot be changed.'
                },
                {
                    option: option.c,
                    text: 'A separate MIB tree exists for any given device in the network.'
                },
                {
                    option: option.d,
                    text: 'Information is organized in a flat manner so that SNMP can access it quickly.'
                }
            ],
            correct: [option.a],
            comment:
                'SNMP set, get, and trap messages are used to access and manipulate the information contained in the MIB. This information is organized hierarchically so that SNMP can access it quickly. Each piece of information within the MIB is given an object ID (OID), that is organized based on RFC standards into a hierarchy of OIDs. The MIB tree for any given device includes branches with variables common to many networking devices and branches with variables specific to that device or vendor.'
        },
        {
            chapter: 2,
            question:
                'Which three items are prompted for a user response during interactive AutoSecure setup? (Choose three.)',
            answers: [
                { option: option.a, text: 'IP addresses of interfaces' },
                { option: option.b, text: 'content of a security banner' },
                { option: option.c, text: 'enable secret password' },
                { option: option.d, text: 'services to disable' },
                { option: option.e, text: 'enable password' },
                { option: option.f, text: 'interfaces to enable' }
            ],
            correct: [option.b, option.c, option.e],
            comment:
                'During AutoSecure setup, the following steps occur:\n– The auto secure command is entered.\n– The wizard gathers information about the outside interfaces.\n– AutoSecure secures the management plane by disabling unnecessary services.\n– AutoSecure prompts for a security banner.\n– AutoSecure prompts for passwords and enables password and login features.\n– Interfaces are secured.\n– The forwarding plane is secured.'
        },
        {
            chapter: 2,
            question:
                'A network engineer is implementing security on all company routers. Which two commands must be issued to force authentication via the password 1A2b3C for all OSPF-enabled interfaces in the backbone area of the company network? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'area 0 authentication message-digest'
                },
                {
                    option: option.b,
                    text: 'ip ospf message-digest-key 1 md5 1A2b3C'
                },
                { option: option.c, text: 'username OSPF password 1A2b3C' },
                { option: option.d, text: 'enable password 1A2b3C' },
                {
                    option: option.e,
                    text: 'area 1 authentication message-digest'
                }
            ],
            correct: [option.b, option.a],
            comment:
                'The two commands that are necessary to configure authentication via the password 1A2b3C for all OSPF-enabled interfaces in the backbone area (Area 0) of the company network would be ip ospf message-digest-key 1 md5 1A2b3C and area 0 authentication message-digest. The option area 1 authentication message-digest is incorrect because it refers to Area 1, not Area 0. The option enable password 1A2b3C is incorrect because it would set the privileged EXEC mode password instead of the OSPF authentication password. The option username OSPF password 1A2b3C is required to create a username database in a router, which is not required with OSPF authentication.'
        },
        {
            chapter: 2,
            question:
                'What is the purpose of using the ip ospf message-digest-key key md5 password command and the area area-id authentication message-digest command on a router?',
            answers: [
                {
                    option: option.a,
                    text: 'to configure OSPF MD5 authentication globally on the router'
                },
                {
                    option: option.b,
                    text: 'to enable OSPF MD5 authentication on a per-interface basis'
                },
                {
                    option: option.c,
                    text: 'to facilitate the establishment of neighbor adjacencies'
                },
                { option: option.d, text: 'to encrypt OSPF routing updates' }
            ],
            correct: [option.a],
            comment:
                'To configure OSPF MD5 authentication globally, the ip ospf message-digest-key key md5 password interface configuration command and the area area-id authentication message-digest router configuration command are issued. To configure OSPF MD5 authentication per interface, the ip ospf message-digest-key key md5 password interface configuration command and the ip ospf authentication message-digest interface configuration command are issued. Authentication does not encrypt OSPF routing updates. The requirements to establish OSPF router neighbor adjacencies are separate from authentication.'
        },
        {
            chapter: 2,
            question:
                'Which three actions are produced by adding Cisco IOS login enhancements to the router login process? (Choose three.)',
            answers: [
                { option: option.a, text: 'permit only secure console access' },
                { option: option.b, text: 'create password authentication' },
                {
                    option: option.c,
                    text: 'automatically provide AAA authentication'
                },
                { option: option.d, text: 'create syslog messages' },
                { option: option.e, text: 'slow down an active attack' },
                {
                    option: option.f,
                    text: 'disable logins from specified hosts'
                }
            ],
            correct: [option.a, option.d, option.e],
            comment:
                'Cisco IOS login enhancements provide increased security in three ways:\n- Implement delays between successive login attempts\n- Enable login shutdown if DoS attacks are suspected\n- Generate system-logging messages for login detection\nBanners and password authentication are disabled by default and must be enabled by command. Virtual login enhancements do not apply to console connections.'
        }
    ];
};

export default useQuestions;
