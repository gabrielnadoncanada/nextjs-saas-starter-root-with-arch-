import { prisma } from '../shared/lib/prisma';

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'demo@acme.com',
      hashedPassword: 'demo',
    },
  });

  const tenant = await prisma.tenant.create({
    data: { name: 'Acme Inc.', ownerId: user.id },
  });

  await prisma.membership.create({
    data: { userId: user.id, tenantId: tenant.id, role: 'OWNER' },
  });

  console.log('Database seeded 🌱');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });