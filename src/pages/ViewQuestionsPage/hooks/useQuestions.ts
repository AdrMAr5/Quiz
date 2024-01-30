export enum option {
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
    selected?: option[];
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
            correct: [option.b],
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
            correct: [option.a, option.d, option.f],
            comment:
                'Cisco IOS login enhancements provide increased security in three ways:\n- Implement delays between successive login attempts\n- Enable login shutdown if DoS attacks are suspected\n- Generate system-logging messages for login detection\nBanners and password authentication are disabled by default and must be enabled by command. Virtual login enhancements do not apply to console connections.'
        },
        {
            chapter: 3,
            question:
                'A user complains about being locked out of a device after too many unsuccessful AAA login attempts. What could be used by the network administrator to provide a secure authentication access method without locking a user out of a device?',
            answers: [
                {
                    option: option.a,
                    text: 'Use the login delay command for authentication attempts.'
                },
                {
                    option: option.b,
                    text: 'Use the login local command for authenticating user access.'
                },
                {
                    option: option.c,
                    text: 'Use the aaa local authentication attempts max-fail global configuration mode command with a higher number of acceptable failures.'
                },
                {
                    option: option.d,
                    text: 'Use the none keyword when configuring the authentication method list.'
                }
            ],
            correct: [option.a],
            comment:
                'To prevent users from being locked out after unsuccessful AAA login attempts, the login delay command can be used to introduce a delay between successive login attempts.'
        },
        {
            chapter: 3,
            question:
                'A user complains about not being able to gain access to a network device configured with AAA. How would the network administrator determine if login access for the user account is disabled?',
            answers: [
                {
                    option: option.a,
                    text: 'Use the show aaa local user lockout command.'
                },
                {
                    option: option.b,
                    text: 'Use the show running-configuration command.'
                },
                {
                    option: option.c,
                    text: 'Use the show aaa sessions command.'
                },
                { option: option.d, text: 'Use the show aaa user command.' }
            ],
            correct: [option.a],
            comment:
                'To determine if login access for a user account is disabled, the show aaa local user lockout command can be used to check for any lockout status.'
        },
        {
            chapter: 3,
            question:
                'When a method list for AAA authentication is being configured, what is the effect of the keyword local?',
            answers: [
                {
                    option: option.a,
                    text: 'The login succeeds, even if all methods return an error.'
                },
                {
                    option: option.b,
                    text: 'It uses the enable password for authentication.'
                },
                {
                    option: option.c,
                    text: 'It accepts a locally configured username, regardless of case.'
                },
                {
                    option: option.d,
                    text: 'It defaults to the vty line password for authentication.'
                }
            ],
            correct: [option.c],
            comment:
                'When configuring a method list for AAA authentication, the keyword local ensures that a locally configured username is accepted, regardless of case.'
        },
        {
            chapter: 3,
            question:
                'Which solution supports AAA for both RADIUS and TACACS+ servers?',
            answers: [
                {
                    option: option.a,
                    text: 'Implement Cisco Secure Access Control System (ACS) only.'
                },
                {
                    option: option.b,
                    text: 'RADIUS and TACACS+ servers cannot be supported by a single solution.'
                },
                { option: option.c, text: 'Implement a local database.' },
                {
                    option: option.d,
                    text: 'Implement both a local database and Cisco Secure Access Control System (ACS).'
                }
            ],
            correct: [option.a],
            comment:
                'Implementing Cisco Secure Access Control System (ACS) supports both RADIUS and TACACS+ servers in a single solution.'
        },
        {
            chapter: 3,
            question:
                'What difference exists when using Windows Server as an AAA server, rather than Cisco Secure ACS?',
            answers: [
                {
                    option: option.a,
                    text: 'Windows Server requires more Cisco IOS commands to configure.'
                },
                {
                    option: option.b,
                    text: 'Windows Server only supports AAA using TACACS.'
                },
                {
                    option: option.c,
                    text: 'Windows Server uses its own Active Directory (AD) controller for authentication and authorization.'
                },
                {
                    option: option.d,
                    text: 'Windows Server cannot be used as an AAA server.'
                }
            ],
            correct: [option.c],
            comment:
                'When using Windows Server as an AAA server, it uses its own Active Directory (AD) controller for authentication and authorization.'
        },
        {
            chapter: 3,
            question: 'What is a characteristic of TACACS+?',
            answers: [
                {
                    option: option.a,
                    text: 'TACACS+ uses UDP port 1645 or 1812 for authentication, and UDP port 1646 or 1813 for accounting.'
                },
                {
                    option: option.b,
                    text: 'TACACS+ is backward compatible with TACACS and XTACACS.'
                },
                { option: option.c, text: 'TACACS+ is an open IETF standard.' },
                {
                    option: option.d,
                    text: 'TACACS+ provides authorization of router commands on a per-user or per-group basis.'
                }
            ],
            correct: [option.d],
            comment:
                'A characteristic of TACACS+ is that it provides authorization of router commands on a per-user or per-group basis.'
        },
        {
            chapter: 3,
            question:
                'Which debug command is used to focus on the status of a TCP connection when using TACACS+ for authentication?',
            answers: [
                { option: option.a, text: 'debug tacacs events.' },
                { option: option.b, text: 'debug tacacs.' },
                { option: option.c, text: 'debug tacacs accounting.' },
                { option: option.d, text: 'debug aaa authentication.' }
            ],
            correct: [option.a],
            comment:
                'The debug tacacs events command is used to focus on the status of a TCP connection when using TACACS+ for authentication.'
        },
        {
            chapter: 3,
            question:
                'Which characteristic is an important aspect of authorization in an AAA-enabled network device?',
            answers: [
                {
                    option: option.a,
                    text: 'The authorization feature enhances network performance.'
                },
                {
                    option: option.b,
                    text: 'User access is restricted to certain services.'
                },
                {
                    option: option.c,
                    text: 'User actions are recorded for use in audits and troubleshooting events.'
                },
                {
                    option: option.d,
                    text: 'A user must be identified before network access is granted.'
                }
            ],
            correct: [option.b],
            comment:
                'In an AAA-enabled network device, authorization ensures that user access is restricted to certain services.'
        },
        {
            chapter: 3,
            question:
                'What is the result of entering the aaa accounting network command on a router?',
            answers: [
                {
                    option: option.a,
                    text: 'The router collects and reports usage data related to network-related service requests.'
                },
                {
                    option: option.b,
                    text: 'The router outputs accounting data for all EXEC shell sessions.'
                },
                {
                    option: option.c,
                    text: 'The router provides data for only internal service requests.'
                },
                {
                    option: option.d,
                    text: 'The router outputs accounting data for all outbound connections such as SSH and Telnet.'
                }
            ],
            correct: [option.a],
            comment:
                'Entering the aaa accounting network command on a router results in the router collecting and reporting usage data related to network-related service requests.'
        },
        {
            chapter: 3,
            question: 'What is a characteristic of AAA accounting?',
            answers: [
                {
                    option: option.a,
                    text: 'Possible triggers for the aaa accounting exec default command include start-stop and stop-only.'
                },
                {
                    option: option.b,
                    text: 'Accounting can only be enabled for network connections.'
                },
                {
                    option: option.c,
                    text: 'Accounting is concerned with allowing and disallowing authenticated users access to certain areas and programs on the network.'
                },
                {
                    option: option.d,
                    text: 'Users are not required to be authenticated before AAA accounting logs their activities on the network.'
                }
            ],
            correct: [option.a],
            comment:
                'AAA accounting allows for triggers like start-stop and stop-only with the aaa accounting exec default command.'
        },
        {
            chapter: 3,
            question:
                'When using 802.1X authentication, what device controls physical access to the network, based on the authentication status of the client?',
            answers: [
                {
                    option: option.a,
                    text: 'The router that is serving as the default gateway.'
                },
                { option: option.b, text: 'The authentication server.' },
                {
                    option: option.c,
                    text: 'The switch that the client is connected to.'
                },
                { option: option.d, text: 'The supplicant.' }
            ],
            correct: [option.c],
            comment:
                'In 802.1X authentication, the switch that the client is connected to controls physical access to the network based on the authentication status of the client.'
        },
        {
            chapter: 3,
            question:
                'Because of implemented security controls, a user can only access a server with FTP. Which AAA component accomplishes this?',
            answers: [
                { option: option.a, text: 'Accounting.' },
                { option: option.b, text: 'Accessibility.' },
                { option: option.c, text: 'Auditing.' },
                { option: option.d, text: 'Authorization.' },
                { option: option.e, text: 'Authentication.' }
            ],
            correct: [option.d],
            comment:
                'Authorization is the AAA component that controls what resources a user can access, such as limiting access to a server with FTP.'
        },
        {
            chapter: 3,
            question:
                'Why is authentication with AAA preferred over a local database method?',
            answers: [
                {
                    option: option.a,
                    text: 'It provides a fallback authentication method if the administrator forgets the username or password.'
                },
                { option: option.b, text: 'It uses less network bandwidth.' },
                {
                    option: option.c,
                    text: 'It specifies a different password for each line or port.'
                },
                {
                    option: option.d,
                    text: 'It requires a login and password combination on the console, vty lines, and aux ports.'
                }
            ],
            correct: [option.a],
            comment:
                'Authentication with AAA is preferred over a local database method because it provides a fallback authentication method if the administrator forgets the username or password.'
        },
        {
            chapter: 3,
            question:
                'Which authentication method stores usernames and passwords in the router and is ideal for small networks?',
            answers: [
                { option: option.a, text: 'Local AAA over TACACS+' },
                { option: option.b, text: 'Server-based AAA over TACACS+' },
                { option: option.c, text: 'Local AAA.' },
                { option: option.d, text: 'Local AAA over RADIUS.' },
                { option: option.e, text: 'Server-based AAA over RADIUS.' }
            ],
            correct: [option.c],
            comment:
                'Local AAA, which stores usernames and passwords in the router, is ideal for small networks.'
        },
        {
            chapter: 3,
            question:
                'Which component of AAA allows an administrator to track individuals who access network resources and any changes that are made to those resources?',
            answers: [
                { option: option.a, text: 'Accounting.' },
                { option: option.b, text: 'Accessibility.' },
                { option: option.c, text: 'Authentication.' },
                { option: option.d, text: 'Authorization.' }
            ],
            correct: [option.a],
            comment:
                'The accounting component of AAA allows an administrator to track individuals who access network resources and any changes made to those resources.'
        },
        {
            chapter: 3,
            question:
                'Which two features are included by both TACACS+ and RADIUS protocols?',
            answers: [
                { option: option.a, text: '802.1X support.' },
                {
                    option: option.b,
                    text: 'Separate authentication and authorization processes.'
                },
                { option: option.c, text: 'SIP support.' },
                { option: option.d, text: 'Password encryption.' },
                {
                    option: option.e,
                    text: 'Utilization of transport layer protocols.'
                }
            ],
            correct: [option.b, option.d],
            comment:
                'Both TACACS+ and RADIUS protocols include separate authentication and authorization processes and password encryption.'
        },
        {
            chapter: 3,
            question:
                'Which server-based authentication protocol would be best for an organization that wants to apply authorization policies on a per-group basis?',
            answers: [
                { option: option.a, text: 'SSH.' },
                { option: option.b, text: 'RADIUS.' },
                { option: option.c, text: 'ACS.' },
                { option: option.d, text: 'TACACS+.' }
            ],
            correct: [option.d],
            comment:
                'TACACS+ is a server-based authentication protocol that is best for organizations wanting to apply authorization policies on a per-group basis.'
        },
        {
            chapter: 3,
            question:
                'The single-connection keyword prevents the configuration of multiple TACACS+ servers on a AAA-enabled router.',
            answers: [
                { option: option.a, text: 'false' },
                { option: option.b, text: 'true' }
            ],
            correct: [option.a],
            comment:
                'The statement is false. The single-connection keyword does not prevent the configuration of multiple TACACS+ servers; rather, it ensures that the router uses a single connection to the TACACS+ server for authentication and authorization requests.'
        },
        {
            chapter: 3,
            question:
                'Why would a network administrator include a local username configuration, when the AAA-enabled router is also configured to authenticate using several ACS servers?',
            answers: [
                {
                    option: option.a,
                    text: 'Because ACS servers only support remote user access, local users can only authenticate using a local username database.'
                },
                {
                    option: option.b,
                    text: 'A local username database is required when configuring authentication using ACS servers.'
                },
                {
                    option: option.c,
                    text: 'The local username database will provide a backup for authentication in the event the ACS servers become unreachable.'
                },
                {
                    option: option.d,
                    text: 'Without a local username database, the router will require successful authentication with each ACS server.'
                }
            ],
            correct: [option.c],
            comment:
                'Including a local username configuration provides a backup for authentication in case the ACS servers become unreachable. Local users can still authenticate even if ACS servers are unavailable.'
        },
        {
            chapter: 3,
            question:
                'Which authentication method stores usernames and passwords in the router and is ideal for small networks?',
            answers: [
                { option: option.a, text: 'local AAA' },
                { option: option.b, text: 'server-based AAA' },
                { option: option.c, text: 'server-based AAA over TACACS+' },
                { option: option.d, text: 'local AAA over TACACS+' },
                { option: option.e, text: 'local AAA over RADIUS' },
                { option: option.f, text: 'server-based AAA over RADIUS' }
            ],
            correct: [option.a],
            comment:
                'The local AAA authentication method stores usernames and passwords in the router, making it ideal for small networks.'
        },
        {
            chapter: 3,
            question:
                'What device is considered a supplicant during the 802.1X authentication process?',
            answers: [
                {
                    option: option.a,
                    text: 'the client that is requesting authentication'
                },
                {
                    option: option.b,
                    text: 'the switch that is controlling network access'
                },
                {
                    option: option.c,
                    text: 'the router that is serving as the default gateway'
                },
                {
                    option: option.d,
                    text: 'the authentication server that is performing client authentication'
                }
            ],
            correct: [option.a],
            comment:
                'In the 802.1X authentication process, the client that requests authentication is considered the supplicant.'
        },
        {
            chapter: 3,
            question:
                'What protocol is used to encapsulate the EAP data between the authenticator and authentication server performing 802.1X authentication?',
            answers: [
                { option: option.a, text: 'SSH' },
                { option: option.b, text: 'MD5' },
                { option: option.c, text: 'TACACS+' },
                { option: option.d, text: 'RADIUS' }
            ],
            correct: [option.d],
            comment:
                'The RADIUS protocol is used to encapsulate the EAP (Extensible Authentication Protocol) data between the authenticator (network access device) and the authentication server during 802.1X authentication.'
        },

        {
            chapter: 4,
            question:
                'Which statement describes a typical security policy for a DMZ firewall configuration?',
            answers: [
                {
                    option: option.a,
                    text: 'Traffic that originates from the inside interface is generally blocked entirely or very selectively permitted to the outside interface.'
                },
                {
                    option: option.b,
                    text: 'Traffic that originates from the DMZ interface is selectively permitted to the outside interface.'
                },
                {
                    option: option.c,
                    text: 'Traffic that originates from the outside interface is permitted to traverse the firewall to the inside interface with few or no restrictions.'
                },
                {
                    option: option.d,
                    text: 'Return traffic from the inside that is associated with traffic originating from the outside is permitted to traverse from the inside interface to the outside interface.'
                },
                {
                    option: option.e,
                    text: 'Return traffic from the outside that is associated with traffic originating from the inside is permitted to traverse from the outside interface to the DMZ interface.'
                }
            ],
            correct: [option.b],
            comment:
                'With a three interface firewall design that has internal, external, and DMZ connections, typical configurations include the following:\n' +
                'Traffic originating from DMZ destined for the internal network is normally blocked.\n' +
                'Traffic originating from the DMZ destined for external networks is typically permitted based on what services are being used in the DMZ.\n' +
                'Traffic originating from the internal network destined from the DMZ is normally inspected and allowed to return.\n' +
                'Traffic originating from external networks (the public network) is typically allowed in the DMZ only for specific services.'
        },
        {
            chapter: 4,
            question:
                'When an inbound Internet-traffic ACL is being implemented, what should be included to prevent the spoofing of internal networks?',
            answers: [
                {
                    option: option.a,
                    text: 'ACEs to prevent traffic from private address spaces.'
                },
                {
                    option: option.b,
                    text: 'ACEs to prevent broadcast address traffic.'
                },
                { option: option.c, text: 'ACEs to prevent ICMP traffic.' },
                { option: option.d, text: 'ACEs to prevent HTTP traffic.' },
                { option: option.e, text: 'ACEs to prevent SNMP traffic.' }
            ],
            correct: [option.a],
            comment:
                'Common ACEs to assist with antispoofing include blocking packets that have a source address in the 127.0.0.0/8 range, any private address, or any multicast addresses. Furthermore, the administrator should not allow any outbound packets with a source address other than a valid address that is used in the internal networks of the organization.'
        },
        {
            chapter: 4,
            question:
                'In addition to the criteria used by extended ACLs, what conditions are used by a classic firewall to filter traffic?',
            answers: [
                {
                    option: option.a,
                    text: 'TCP/UDP source and destination port numbers.'
                },
                { option: option.b, text: 'TCP/IP protocol numbers.' },
                {
                    option: option.c,
                    text: 'IP source and destination addresses.'
                },
                {
                    option: option.d,
                    text: 'Application layer protocol session information.'
                }
            ],
            correct: [option.d],
            comment:
                'The classic firewall provides stateful inspection including protocols that require multiple channels for communication such as FTP and H.323. Protocol numbers, port numbers, and source and destination IP addresses are all standard filters for extended ACLs.'
        },
        {
            chapter: 4,
            question:
                'A router has been configured as a classic firewall and an inbound ACL applied to the external interface. Which action does the router take after inbound-to-outbound traffic is inspected and a new entry is created in the state table?',
            answers: [
                {
                    option: option.a,
                    text: 'When traffic returns from its destination, it is reinspected, and a new entry is added to the state table.'
                },
                {
                    option: option.b,
                    text: 'The internal interface ACL is reconfigured to allow the host IP address access to the Internet.'
                },
                {
                    option: option.c,
                    text: 'The entry remains in the state table after the session is terminated so that it can be reused by the host.'
                },
                {
                    option: option.d,
                    text: 'A dynamic ACL entry is added to the external interface in the inbound direction.'
                }
            ],
            correct: [option.d],
            comment:
                'The traffic flow from the internal network to the public network is commonly inspected. The traffic flows cause dynamic entries to be added to the external interface for inbound traffic so that traffic that originates from the internal network going to the public network is allowed to return to the internal source.'
        },
        {
            chapter: 4,
            question:
                'What is one benefit of using a stateful firewall instead of a proxy server?',
            answers: [
                {
                    option: option.a,
                    text: 'Ability to perform user authentication.'
                },
                { option: option.b, text: 'Better performance.' },
                {
                    option: option.c,
                    text: 'Ability to perform packet filtering.'
                },
                { option: option.d, text: 'Prevention of Layer 7 attacks.' }
            ],
            correct: [option.b],
            comment:
                'A stateful firewall performs better than a proxy server. A stateful firewall cannot authenticate users or prevent Layer 7 attacks. Both a stateful firewall and a proxy server can filter packets.'
        },

        {
            chapter: 4,
            question: 'What is one limitation of a stateful firewall?',
            answers: [
                { option: option.a, text: 'weak user authentication' },
                { option: option.b, text: 'cannot filter unnecessary traffic' },
                {
                    option: option.c,
                    text: 'not as effective with UDP- or ICMP-based traffic*'
                },
                { option: option.d, text: 'poor log information' }
            ],
            correct: [option.c],
            comment:
                'Limitations of stateful firewalls include not being as effective with UDP- or ICMP-based traffic.'
        },
        {
            chapter: 4,
            question:
                'To facilitate the troubleshooting process, which inbound ICMP message should be permitted on an outside interface?',
            answers: [
                { option: option.a, text: 'echo request' },
                { option: option.b, text: 'time-stamp request' },
                { option: option.c, text: 'echo reply*' },
                { option: option.d, text: 'time-stamp reply' },
                { option: option.e, text: 'router advertisement' }
            ],
            correct: [option.c],
            comment:
                'Allowing the ICMP echo reply message inbound allows internal users to ping external addresses.'
        },
        {
            chapter: 4,
            question:
                'Which command is used to activate an IPv6 ACL named ENG_ACL on an interface so that the router filters traffic prior to accessing the routing table?',
            answers: [
                { option: option.a, text: 'ipv6 access-class ENG_ACL in' },
                { option: option.b, text: 'ipv6 traffic-filter ENG_ACL out' },
                { option: option.c, text: 'ipv6 traffic-filter ENG_ACL in*' },
                { option: option.d, text: 'ipv6 access-class ENG_ACL out' }
            ],
            correct: [option.c],
            comment:
                'The ipv6 traffic-filter command is used to activate an IPv6 ACL on an interface.'
        },
        {
            chapter: 4,
            question:
                'If the provided ACEs are in the same ACL, which ACE should be listed first in the ACL according to best practice?',
            answers: [
                {
                    option: option.a,
                    text: 'permit udp 172.16.0.0 0.0.255.255 host 172.16.1.5 eq snmptrap*'
                },
                {
                    option: option.b,
                    text: 'deny udp any host 172.16.1.5 eq snmptrap'
                },
                { option: option.c, text: 'deny tcp any any eq telnet' },
                { option: option.d, text: 'permit ip any any' },
                {
                    option: option.e,
                    text: 'permit udp any any range 10000 20000'
                },
                {
                    option: option.f,
                    text: 'permit tcp 172.16.0.0 0.0.3.255 any established'
                }
            ],
            correct: [option.a],
            comment:
                'A best practice for configuring an extended ACL is to ensure that the most specific ACE is placed higher in the ACL.'
        },
        {
            chapter: 4,
            question:
                'Which security tool monitors network traffic as it flows into and out of the organization and determines whether packets belong to an existing connection or are from an unauthorized source?',
            answers: [
                { option: option.a, text: 'web security appliance' },
                { option: option.b, text: 'intrusion protection system' },
                { option: option.c, text: 'application proxy' },
                { option: option.d, text: 'stateful firewall*' }
            ],
            correct: [option.d],
            comment:
                'A stateful firewall filters packets based on state information maintained in a state table.'
        },
        {
            chapter: 4,
            question:
                'A company is deploying a new network design in which the border router has three interfaces...',
            answers: [
                {
                    option: option.a,
                    text: 'traffic that is going from the private network to the DMZ*'
                },
                {
                    option: option.b,
                    text: 'traffic that is returning from the DMZ after originating from the private network'
                },
                {
                    option: option.c,
                    text: 'traffic that originates from the public network and that is destined for the DMZ'
                },
                {
                    option: option.d,
                    text: 'traffic that is returning from the public network after originating from the private network'
                }
            ],
            correct: [option.a],
            comment:
                'Most traffic within an organization originates from a private IP address, and traffic to the DMZ is typically inspected based on services provided by servers.'
        },
        {
            chapter: 4,
            question: 'Consider the following access list...',
            answers: [
                {
                    option: option.a,
                    text: 'Only the network device assigned the IP address 192.168.10.1 is allowed to access the router.'
                },
                {
                    option: option.b,
                    text: 'Devices on the 192.168.10.0/24 network are not allowed to reply to any ping requests.'
                },
                {
                    option: option.c,
                    text: 'Only Layer 3 connections are allowed to be made from the router to any other network device.'
                },
                {
                    option: option.d,
                    text: 'Devices on the 192.168.10.0/24 network are not allowed to ping other devices on the 192.168.11.0 network.*'
                },
                {
                    option: option.e,
                    text: 'A Telnet or SSH session is allowed from any device on the 192.168.10.0 into the router with this access list assigned.*'
                }
            ],
            correct: [option.d, option.e],
            comment:
                'The first ACE allows the 192.168.10.1 device to do any TCP/IP-based transactions with any other destination. The second ACE stops devices on the 192.168.10.0/24 network from issuing any pings to any other location.'
        },
        {
            chapter: 4,
            question:
                'What is the function of the pass action on a Cisco IOS Zone-Based Policy Firewall?',
            answers: [
                {
                    option: option.a,
                    text: 'logging of rejected or dropped packets'
                },
                {
                    option: option.b,
                    text: 'inspecting traffic between zones for traffic control'
                },
                {
                    option: option.c,
                    text: 'tracking the state of connections between zones'
                },
                {
                    option: option.d,
                    text: 'forwarding traffic from one zone to another*'
                }
            ],
            correct: [option.d],
            comment:
                'The pass action performed by Cisco IOS ZPF permits forwarding of traffic in a manner similar to the permit statement in an access control list.'
        },
        {
            chapter: 4,
            question:
                'When a Cisco IOS Zone-Based Policy Firewall is being configured via CLI, which step must be taken after zones have been created?',
            answers: [
                { option: option.a, text: 'Assign interfaces to zones.' },
                {
                    option: option.b,
                    text: 'Establish policies between zones.*'
                },
                { option: option.c, text: 'Identify subsets within zones.' },
                {
                    option: option.d,
                    text: 'Design the physical infrastructure.'
                }
            ],
            correct: [option.b],
            comment:
                'The steps for configuring zones in a Zone-Based Policy Firewall are as follows: Step 1. Determine the zones. Step 2. Establish policies between zones. Step 3. Design the physical infrastructure. Step 4. Identify subsets within zones and merge traffic requirements.'
        },
        {
            chapter: 4,
            question:
                'A network administrator is implementing a Classic Firewall and a Zone-Based Firewall concurrently on a router. Which statement best describes this implementation?',
            answers: [
                {
                    option: option.a,
                    text: 'An interface must be assigned to a security zone before IP inspection can occur.'
                },
                {
                    option: option.b,
                    text: 'Both models must be implemented on all interfaces.'
                },
                {
                    option: option.c,
                    text: 'The two models cannot be implemented on a single interface.*'
                },
                {
                    option: option.d,
                    text: 'Both a Classic Firewall and Zone-Based Firewall cannot be used concurrently.'
                }
            ],
            correct: [option.c],
            comment:
                'Both a Classic Firewall and Zone-Based Firewall can be implemented concurrently on a router, but they cannot both be configured on a single interface.'
        },
        {
            chapter: 4,
            question:
                'Which two rules about interfaces are valid when implementing a Zone-Based Policy Firewall? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'If one interface is a zone member, but the other is not, all traffic will be passed.'
                },
                {
                    option: option.b,
                    text: 'If neither interface is a zone member, then the action is to pass traffic.*'
                },
                {
                    option: option.c,
                    text: 'If both interfaces are members of the same zone, all traffic will be passed.*'
                },
                {
                    option: option.d,
                    text: 'If one interface is a zone member and a zone-pair exists, all traffic will be passed.'
                },
                {
                    option: option.e,
                    text: 'If both interfaces belong to the same zone-pair and a policy exists, all traffic will be passed.'
                }
            ],
            correct: [option.b, option.c],
            comment:
                'The rules for traffic transiting through the router are as follows: If neither interface is a zone member, then the resulting action is to pass the traffic. If both interfaces are members of the same zone, then the resulting action is to pass the traffic.'
        },
        {
            chapter: 4,
            question:
                'Which command will verify a Zone-Based Policy Firewall configuration?',
            answers: [
                { option: option.a, text: 'show interfaces' },
                { option: option.b, text: 'show zones' },
                { option: option.c, text: 'show running-config*' },
                { option: option.d, text: 'show protocols' }
            ],
            correct: [option.c],
            comment:
                'The ZPF configuration can be verified with the show running-config, show policy-map, show class-map, show zone security, and show zone-pair security commands.'
        },
        {
            chapter: 4,
            question:
                'Which type of packet is unable to be filtered by an outbound ACL?',
            answers: [
                { option: option.a, text: 'multicast packet' },
                { option: option.b, text: 'ICMP packet' },
                { option: option.c, text: 'broadcast packet' },
                { option: option.d, text: 'router-generated packet*' }
            ],
            correct: [option.d],
            comment:
                'Traffic that originates within a router such as pings from a command prompt, remote access from a router to another device, or routing updates are not affected by outbound access lists. The traffic must flow through the router in order for the router to apply the ACEs.'
        },
        {
            chapter: 4,
            question:
                'When a Cisco IOS Zone-Based Policy Firewall is being configured, which two actions can be applied to a traffic class? (Choose two.)',
            answers: [
                { option: option.a, text: 'drop*' },
                { option: option.b, text: 'log' },
                { option: option.c, text: 'forward' },
                { option: option.d, text: 'hold' },
                { option: option.e, text: 'inspect*' },
                { option: option.f, text: 'copy' }
            ],
            correct: [option.a, option.e],
            comment:
                'The three actions that can be applied are inspect, drop, and pass. Inspect – This action offers state-based traffic control. Drop – This is the default action for all traffic. Similar to the implicit deny any at the end of every ACL, there is an explicit drop applied by the IOS to the end of every policy map. Pass – This action allows the router to forward traffic from one zone to another.'
        },
        {
            chapter: 6,
            question:
                'In what situation would a network administrator most likely implement root guard?',
            answers: [
                {
                    option: option.a,
                    text: 'on all switch ports (used or unused)'
                },
                {
                    option: option.b,
                    text: 'on all switch ports that connect to a Layer 3 device'
                },
                {
                    option: option.c,
                    text: 'on all switch ports that connect to host devices'
                },
                {
                    option: option.d,
                    text: 'on all switch ports that connect to another switch'
                },
                {
                    option: option.e,
                    text: 'on all switch ports that connect to another switch that is not the root bridge*'
                }
            ],
            correct: [option.e],
            comment:
                'Root guard in conjunction with PortFast, and BPDU guard is used to prevent an STP manipulation attack.'
        },
        {
            chapter: 6,
            question:
                'Two devices that are connected to the same switch need to be totally isolated from one another. Which Cisco switch security feature will provide this isolation?',
            answers: [
                { option: option.a, text: 'PVLAN Edge*' },
                { option: option.b, text: 'DTP' },
                { option: option.c, text: 'SPAN' },
                { option: option.d, text: 'BPDU guard' }
            ],
            correct: [option.a],
            comment:
                'The PVLAN Edge feature does not allow one device to see traffic that is generated by another device. Ports configured with the PVLAN Edge feature are also known as protected ports.'
        },
        {
            chapter: 6,
            question:
                'Which type of VLAN-hopping attack may be prevented by designating an unused VLAN as the native VLAN?',
            answers: [
                { option: option.a, text: 'DTP spoofing' },
                { option: option.b, text: 'DHCP spoofing' },
                { option: option.c, text: 'VLAN double-tagging*' },
                { option: option.d, text: 'DHCP starvation' }
            ],
            correct: [option.c],
            comment:
                'Designating an unused VLAN as the native VLAN can help prevent VLAN double-tagging attacks.'
        },
        {
            chapter: 6,
            question:
                'What component of Cisco NAC is responsible for performing deep inspection of device security profiles?',
            answers: [
                { option: option.a, text: 'Cisco NAC Profiler' },
                { option: option.b, text: 'Cisco NAC Agent*' },
                { option: option.c, text: 'Cisco NAC Manager' },
                { option: option.d, text: 'Cisco NAC Server' }
            ],
            correct: [option.b],
            comment:
                'The Cisco NAC Agent is a lightweight agent that runs on endpoint devices. The function of this agent is to perform deep inspection of the security profile of the endpoints.'
        },
        {
            chapter: 6,
            question:
                'Which three functions are provided under Cisco NAC framework solution? (Choose three.)',
            answers: [
                { option: option.a, text: 'VPN connection' },
                { option: option.b, text: 'AAA services*' },
                { option: option.c, text: 'intrusion prevention' },
                { option: option.d, text: 'scanning for policy compliance*' },
                { option: option.e, text: 'secure connection to servers' },
                {
                    option: option.f,
                    text: 'remediation for noncompliant devices*'
                }
            ],
            correct: [option.b, option.d, option.f],
            comment:
                'The Cisco NAC framework provides authentication, authorization, and accounting (AAA) services; posture assessment (evaluating an incoming device against the security policies), quarantining of non-compliant systems, and remediation of noncompliant devices.'
        },
        {
            chapter: 6,
            question:
                'Which feature is part of the Antimalware Protection security solution?',
            answers: [
                { option: option.a, text: 'file retrospection*' },
                {
                    option: option.b,
                    text: 'user authentication and authorization'
                },
                { option: option.c, text: 'data loss prevention' },
                { option: option.d, text: 'spam blocking' }
            ],
            correct: [option.a],
            comment:
                'The Antimalware Protection (AMP) security solution can enable malware detection and blocking, continuous analysis, and retrospective alerting with features such as file retrospection.'
        },
        {
            chapter: 6,
            question:
                'What protocol should be disabled to help mitigate VLAN hopping attacks?',
            answers: [
                { option: option.a, text: 'STP' },
                { option: option.b, text: 'ARP' },
                { option: option.c, text: 'CDP' },
                { option: option.d, text: 'DTP*' }
            ],
            correct: [option.d],
            comment:
                'Mitigating a VLAN hopping attack can be done by disabling Dynamic Trunking Protocol (DTP) and by setting the native VLAN of trunk links to a VLAN not in use.'
        },
        {
            chapter: 6,
            question:
                'What network attack seeks to create a DoS for clients by preventing them from being able to obtain a DHCP lease?',
            answers: [
                { option: option.a, text: 'DHCP spoofing' },
                { option: option.b, text: 'CAM table attack' },
                { option: option.c, text: 'IP address spoofing' },
                { option: option.d, text: 'DHCP starvation*' }
            ],
            correct: [option.d],
            comment:
                'DHCP starvation attacks are launched by an attacker with the intent to create a DoS for DHCP clients by leasing the entire pool of available IP addresses.'
        },
        {
            chapter: 6,
            question:
                'What is the only type of port that an isolated port can forward traffic to on a private VLAN?',
            answers: [
                { option: option.a, text: 'a community port' },
                { option: option.b, text: 'a promiscuous port*' },
                { option: option.c, text: 'another isolated port' },
                { option: option.d, text: 'any access port in the same PVLAN' }
            ],
            correct: [option.b],
            comment:
                'Isolated ports in a private VLAN can only forward traffic to promiscuous ports, providing Layer 2 isolation within the same broadcast domain.'
        },
        {
            chapter: 6,
            question:
                'What security countermeasure is effective for preventing CAM table overflow attacks?',
            answers: [
                { option: option.a, text: 'DHCP snooping' },
                { option: option.b, text: 'Dynamic ARP Inspection' },
                { option: option.c, text: 'IP source guard' },
                { option: option.d, text: 'port security*' }
            ],
            correct: [option.d],
            comment:
                'Port security is an effective method for preventing CAM table overflow attacks by limiting the number of dynamically learned MAC addresses on a switch port.'
        },
        {
            chapter: 6,
            question:
                'Which two functions are provided by Network Admission Control? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'protecting a switch from MAC address table overflow attacks'
                },
                {
                    option: option.b,
                    text: 'enforcing network security policy for hosts that connect to the network*'
                },
                {
                    option: option.c,
                    text: 'ensuring that only authenticated hosts can access the network*'
                },
                {
                    option: option.d,
                    text: 'stopping excessive broadcasts from disrupting network traffic'
                },
                {
                    option: option.e,
                    text: 'limiting the number of MAC addresses that can be learned on a single switch port'
                }
            ],
            correct: [option.b, option.c],
            comment:
                'The port security feature can be used to limit how many MAC addresses can be learned on a switch port and help prevent MAC address table overflow attacks. These functions are provided by Network Admission Control (NAC).'
        },
        {
            chapter: 6,
            question:
                'Which spanning-tree enhancement prevents the spanning-tree topology from changing by blocking a port that receives a superior BPDU?',
            answers: [
                { option: option.a, text: 'BDPU filter' },
                { option: option.b, text: 'PortFast' },
                { option: option.c, text: 'BPDU guard' },
                { option: option.d, text: 'root guard*' }
            ],
            correct: [option.d],
            comment:
                'Root guard prevents the placement of the root bridge from changing by blocking any port that receives a superior BPDU.'
        },
        {
            chapter: 6,
            question:
                'Which security feature should be enabled in order to prevent an attacker from overflowing the MAC address table of a switch?',
            answers: [
                { option: option.a, text: 'root guard' },
                { option: option.b, text: 'port security*' },
                { option: option.c, text: 'storm control' },
                { option: option.d, text: 'BPDU filter' }
            ],
            correct: [option.b],
            comment:
                'Port security limits the number of source MAC addresses allowed through a switch port. This feature can prevent an attacker from flooding a switch with many spoofed MAC addresses.'
        },
        {
            chapter: 6,
            question:
                'What is the behavior of a switch as a result of a successful CAM table attack?',
            answers: [
                {
                    option: option.a,
                    text: 'The switch will forward all received frames to all other ports.*'
                },
                {
                    option: option.b,
                    text: 'The switch will drop all received frames.'
                },
                {
                    option: option.c,
                    text: 'The switch interfaces will transition to the error-disabled state.'
                },
                { option: option.d, text: 'The switch will shut down.' }
            ],
            correct: [option.a],
            comment:
                'As a result of a CAM table attack, a switch can run out of memory resources to store MAC addresses. When this happens, no new MAC addresses can be added to the CAM table and the switch will forward all received frames to all other ports. This would allow an attacker to capture all traffic that is flooded by the switch.'
        },
        {
            chapter: 6,
            question:
                'What additional security measure must be enabled along with IP Source Guard to protect against address spoofing?',
            answers: [
                { option: option.a, text: 'port security' },
                { option: option.b, text: 'BPDU Guard' },
                { option: option.c, text: 'root guard' },
                { option: option.d, text: 'DHCP snooping*' }
            ],
            correct: [option.d],
            comment:
                'Like Dynamic ARP Inspection (DAI), IP Source Guard (IPSG) needs to determine the validity of MAC-address-to-IP-address bindings. To do this IPSG uses the bindings database built by DHCP snooping.'
        },
        {
            chapter: 6,
            question:
                'Which mitigation technique would prevent rogue servers from providing false IP configuration parameters to clients?',
            answers: [
                { option: option.a, text: 'turning on DHCP snooping' },
                { option: option.b, text: 'implementing port security*' },
                {
                    option: option.c,
                    text: 'implementing port-security on edge ports'
                },
                { option: option.d, text: 'disabling CDP on edge ports' }
            ],
            correct: [option.b],
            comment:
                'When DHCP snooping is enabled, a switch will deny packets containing unauthorized DHCP server messages coming from an untrusted port.'
        },
        {
            chapter: 6,
            question:
                'What are three techniques for mitigating VLAN hopping attacks? (Choose three.)',
            answers: [
                {
                    option: option.a,
                    text: 'Set the native VLAN to an unused VLAN.*'
                },
                { option: option.b, text: 'Disable DTP.*' },
                { option: option.c, text: 'Enable Source Guard.' },
                { option: option.d, text: 'Enable trunking manually.*' },
                { option: option.e, text: 'Enable BPDU guard.' },
                { option: option.f, text: 'Use private VLANs.' }
            ],
            correct: [option.a, option.b, option.d],
            comment:
                'Mitigating a VLAN hopping attack can be done by disabling Dynamic Trunking Protocol (DTP), manually setting ports to trunking mode, and by setting the native VLAN of trunk links to VLANs not in use.'
        },
        {
            chapter: 6,
            question:
                'What two mechanisms are used by Dynamic ARP inspection to validate ARP packets for IP addresses that are dynamically assigned or IP addresses that are static? (Choose two.)',
            answers: [
                {
                    option: option.a,
                    text: 'MAC-address-to-IP-address bindings*'
                },
                { option: option.b, text: 'RARP' },
                { option: option.c, text: 'ARP ACLs*' },
                { option: option.d, text: 'IP ACLs' },
                { option: option.e, text: 'Source Guard' }
            ],
            correct: [option.a, option.c],
            comment:
                'Two methods can be used by Dynamic ARP Inspection (DAI) to determine the validity of MAC-address-to-IP-address bindings. One is a bindings database built by DHCP snooping. The other method is through the use of user-configured ARP ACLs.'
        },
        {
            chapter: 6,
            question:
                'Which STP stability mechanism is used to prevent a rogue switch from becoming the root switch?',
            answers: [
                { option: option.a, text: 'Source Guard' },
                { option: option.b, text: 'BPDU guard' },
                { option: option.c, text: 'root guard*' },
                { option: option.d, text: 'loop guard' }
            ],
            correct: [option.c],
            comment:
                'Root guard prevents the placement of the root bridge from changing by blocking any port that receives a superior BPDU. A superior BPDU is one with a higher root bridge ID than the currently selected root bridge has.'
        },
        {
            chapter: 6,
            question:
                'How can a user connect to the Cisco Cloud Web Security service directly?',
            answers: [
                {
                    option: option.a,
                    text: 'through the connector that is integrated into any Layer 2 Cisco switch'
                },
                {
                    option: option.b,
                    text: 'by using a proxy autoconfiguration file in the end device*'
                },
                {
                    option: option.c,
                    text: 'by accessing a Cisco CWS server before visiting the destination web site'
                },
                {
                    option: option.d,
                    text: 'by establishing a VPN connection with the Cisco CWS'
                }
            ],
            correct: [option.b],
            comment:
                'A client can connect to the Cisco CWS service directly by using a proxy autoconfiguration (PAC) file installed on the end device. The Cisco CWS connector is a software component integrated into four Cisco products including Cisco ASA, Cisco WSA, and Cisco AnyConnect Secure Mobility Client. A client can use the Cisco CWS service through these products.'
        },
        {
            chapter: 6,
            question:
                'What security benefit is gained from enabling BPDU guard on PortFast enabled interfaces?',
            answers: [
                {
                    option: option.a,
                    text: 'enforcing the placement of root bridges'
                },
                {
                    option: option.b,
                    text: 'preventing buffer overflow attacks'
                },
                {
                    option: option.c,
                    text: 'preventing rogue switches from being added to the network*'
                },
                { option: option.d, text: 'protecting against Layer 2 loops' }
            ],
            correct: [option.c],
            comment:
                'BPDU guard immediately error-disables a port that receives a BPDU. This prevents rogue switches from being added to the network. BPDU guard should only be applied to all end-user ports.'
        },
        {
            chapter: 6,
            question:
                'What is the role of the Cisco NAC Manager in implementing a secure networking infrastructure?',
            answers: [
                {
                    option: option.a,
                    text: 'to define role-based user access and endpoint security policies*'
                },
                {
                    option: option.b,
                    text: 'to assess and enforce security policy compliance in the NAC environment'
                },
                {
                    option: option.c,
                    text: 'to perform deep inspection of device security profiles'
                },
                {
                    option: option.d,
                    text: 'to provide post-connection monitoring of all endpoint devices'
                }
            ],
            correct: [option.a],
            comment:
                'Cisco NAC authenticates users and assess the policy compliance of the device the user is using to connect to the network. The role of the Cisco NAC Manager is to define the security policies of user access and endpoint security policies.'
        },
        {
            chapter: 6,
            question:
                'What is the role of the Cisco NAC Server within the Cisco Secure Borderless Network Architecture?',
            answers: [
                {
                    option: option.a,
                    text: 'providing the ability for company employees to create guest accounts'
                },
                {
                    option: option.b,
                    text: 'providing post-connection monitoring of all endpoint devices'
                },
                {
                    option: option.c,
                    text: 'defining role-based user access and endpoint security policies'
                },
                {
                    option: option.d,
                    text: 'assessing and enforcing security policy compliance in the NAC environment*'
                }
            ],
            correct: [option.d],
            comment:
                'Cisco NAC is used in the Cisco Borderless Network Architecture to authenticate users and ensure user devices are compliant with security policies. The Cisco NAC server assesses and enforces security policy compliance.'
        },
        {
            chapter: 6,
            question:
                'What is the role of the Cisco NAC Guest Server within the Cisco Borderless Network architecture?',
            answers: [
                {
                    option: option.a,
                    text: 'It defines role-based user access and endpoint security policies.'
                },
                {
                    option: option.b,
                    text: 'It provides the ability for creation and reporting of guest accounts*'
                },
                {
                    option: option.c,
                    text: 'It provides post-connection monitoring of all endpoint devices.'
                },
                {
                    option: option.d,
                    text: 'It performs deep inspection of device security profiles.'
                }
            ],
            correct: [option.b],
            comment:
                'Cisco NAC is used in the Cisco Borderless Network Architecture to authenticate users and ensure that user devices are compliant with security policies. The Cisco NAC Guest Server manages guest network access and the ability to create guest accounts.'
        }
    ];
};

export default useQuestions;
