import { prisma } from ".";

export const createMediaFiles = (mediafile) => {

  return prisma.mediaFiles.create({
    data: mediafile
  }) 

}