import fs from "fs";

export const deleteFile = (filePath: fs.PathLike) => {
  fs.stat(filePath, function (err, stats) {
    if (process?.env?.NODE_ENV && process.env.NODE_ENV === "development") {
      console.log(stats);
    }

    if (
      err &&
      process?.env?.NODE_ENV &&
      process.env.NODE_ENV === "development"
    ) {
      console.log(`Fail to find file path ${err}`);
    } else {
      fs.unlink(filePath, function (error) {
        if (
          error &&
          process?.env?.NODE_ENV &&
          process.env.NODE_ENV === "development"
        ) {
          console.log("fail to delete the file", error);
          // throw error;
        }
        if (process?.env?.NODE_ENV && process.env.NODE_ENV === "development") {
          console.log("successfully deleted file ");
        }
      });
    }
  });
};
